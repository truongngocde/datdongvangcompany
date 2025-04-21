
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// mongoose.connect('mongodb+srv://admin:De123456789@datdongvang.ugtce2x.mongodb.net/news');

// const categorySchema = new mongoose.Schema({
//   name: String,
//   slug: String,
//   description: String
// });
// const Category = mongoose.model('news_categories', categorySchema);  // PHẢI có dòng này trước

// // Schema news_posts
// const postSchema = new mongoose.Schema({
//   title: String,
//   slug: String,
//   summary: String,
//   content: String,
//   thumbnail: String,
//   images: [String],
//   category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'news_categories' },
//   tags: [String],
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now },
//   author: {
//     name: String,
//     email: String
//   },
//   is_published: Boolean,
//   views: Number
// });
// const Post = mongoose.model('news_posts', postSchema);

// // Thêm bài viết và tham chiếu danh mục
// Category.findOne({ slug: 'tin-cong-ty' }).then(category => {
//   if (!category) {
//     console.log('Không tìm thấy danh mục!');
//     return;
//   }

//   const newPost = new Post({
//     title: 'Công ty ABC ký kết hợp tác với XYZ',
//     slug: 'abc-ky-ket-hop-tac-xyz',
//     summary: 'Ngày 20/4, công ty ABC đã ký kết hợp tác với tập đoàn XYZ...',
//     content: '<p>Toàn bộ nội dung bài viết ở dạng HTML hoặc Markdown...</p>',
//     thumbnail: 'https://domain.com/uploads/thumbnail.jpg',
//     images: [
//       'https://domain.com/uploads/anh1.jpg',
//       'https://domain.com/uploads/anh2.jpg'
//     ],
//     category_id: category._id,
//     tags: ['hợp tác', 'sự kiện'],
//     author: {
//       name: 'Nguyễn Văn A',
//       email: 'a@abc.com'
//     },
//     is_published: true,
//     views: 1234
//   });

//   return newPost.save();
// }).then(() => {
//   console.log('Đã thêm bài viết tin công ty!');
// }).catch(err => {
//   console.error('Lỗi thêm bài viết:', err);
// });



//  const port = 8000;
//  app.listen(port, () => {
//      console.log("Datdongvang is running on http://localhost:8000");
//  })
 


const path = require('path')
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController.js');

// Routes files import
const tourRouter = require('./routers/tourRouters');
const userRouter = require('./routers/userRouters');
const reviewRouter = require('./routers/reviewRouters.js');
const viewRouter = require('./routers/viewRouters.js');
const bookingRouters = require('./routers/bookingRouters.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

// Set security HTTP headers
//app.use(helmet())
app.use( helmet({ contentSecurityPolicy: false }) ); //use axios link
app.use(cors(
  {
    origin: [],
    credentials: true,
    methods: ["POST", "GET"]
  }
));
// 1) GLOBAL/ MIDDLEWARES

// Serving static files
//app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// attracker DOS 
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection "email": {"$gt": ""}
app.use(mongoSanitize());
// Data sanitization against xss
app.use(xss());

// Prevent parameter pollution -> getAllTour -> fix: ?sort=duration&sort=price
app.use(hpp({
  whitelist: [
    'duration', // -> getAllTour -> ?duration=5&duration=9 -> 3 result
     'price',
     'ratingsAverage',
     'maxGroupSize',
     'difficulty',
     'ratingQuantity',
  ]
}));

app.use(compression())

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});
// 3) ROUTERS


app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouters);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
})


app.use(globalErrorHandler)
// START SERVER
module.exports = app;
