// const path = require('path')
// const express = require('express');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const compression = require('compression');

// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController.js');

// Routes files import
const path = require('path');
const newsCategoriesRouter = require('./routers/newsCategoriesRouter');
const newsPostRouter = require('./routers/newsPostsRouters.js');
const mongoose = require('mongoose');

const express = require("express");
const app = express();
// Thêm middleware xử lý form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

mongoose
  .connect(
    "mongodb+srv://admin:De123456789@datdongvang.ugtce2x.mongodb.net/news",
    {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Database connected successfully`);
  });



// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'))

// // Set security HTTP headers
// //app.use(helmet())
// app.use( helmet({ contentSecurityPolicy: false }) ); //use axios link
app.use(cors({
  origin: 'http://localhost:5173', // bạn có thể dùng '*' trong quá trình dev
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// // 1) GLOBAL/ MIDDLEWARES

// // Serving static files
// //app.use(express.static(`${__dirname}/public`));
// app.use(express.static(path.join(__dirname, 'public')));
// // Development logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

// // attracker DOS
// // Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!'
// });
// app.use('/api', limiter);

// // Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// app.use(cookieParser());

// // Data sanitization against NoSQL query injection "email": {"$gt": ""}
// app.use(mongoSanitize());
// // Data sanitization against xss
// app.use(xss());

// // Prevent parameter pollution -> getAllTour -> fix: ?sort=duration&sort=price
// app.use(hpp({
//   whitelist: [
//     'duration', // -> getAllTour -> ?duration=5&duration=9 -> 3 result
//      'price',
//      'ratingsAverage',
//      'maxGroupSize',
//      'difficulty',
//      'ratingQuantity',
//   ]
// }));

// app.use(compression())

// // Test middleware
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log(req.cookies);
//   next();
// });
// 3) ROUTERS

app.use("/api/news-categories", newsCategoriesRouter);
app.use("/api/news-posts", newsPostRouter);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log("Datdongvang is running on http://localhost:8000");
});

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
// })

// app.use(globalErrorHandler)
// // START SERVER
// module.exports = app;
