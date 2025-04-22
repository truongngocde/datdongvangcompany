const mongoose = require('mongoose');
const NewsCategory = require('./models/newsCategoriesModel');
const NewsPost = require('./models/newsPostModel');

const MONGO_URI = 'mongodb+srv://admin:De123456789@datdongvang.ugtce2x.mongodb.net/news'; // sửa lại URI của bạn

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('✅ Kết nối MongoDB thành công');

    // Xoá sạch trước khi tạo mới
    await NewsCategory.deleteMany();
    await NewsPost.deleteMany();

    // Tạo 1 danh mục
    const category = await NewsCategory.create({
      name: 'Cổ đông',
      slug: 'co-dong',
      description: 'Thông tin cho cổ đông'
    });

    // Tạo 1 bài viết mẫu
    await NewsPost.create({
      title: 'Thông báo họp cổ đông 2025',
      slug: 'thong-bao-hop-co-dong-2025',
      summary: 'Cuộc họp cổ đông thường niên năm 2025',
      content: '<p>Nội dung chi tiết cuộc họp cổ đông năm 2025...</p>',
      thumbnail: 'https://example.com/thumb.jpg',
      images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      category_id: category._id,
      tags: ['co-dong', 'hop-dong'],
      author: {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com'
      },
      is_published: true,
      views: 0
    });

    console.log('✅ Dữ liệu mẫu đã được tạo!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Lỗi khi seed dữ liệu:', err);
  });
