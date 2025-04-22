const mongoose = require('mongoose');
const NewsCategory = require('./models/newsCategoriesModel');
const NewsPost = require('./models/newsPostModel');

const MONGO_URI = 'mongodb+srv://admin:De123456789@datdongvang.ugtce2x.mongodb.net/news'; // Đảm bảo đúng URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('🗑️ Đang xoá toàn bộ dữ liệu...');

    const deletedCategories = await NewsCategory.deleteMany();
    const deletedPosts = await NewsPost.deleteMany();

    console.log(`✅ Đã xoá ${deletedCategories.deletedCount} danh mục`);
    console.log(`✅ Đã xoá ${deletedPosts.deletedCount} bài viết`);

    await mongoose.disconnect();
    console.log('✅ Đóng kết nối MongoDB');
  })
  .catch(err => {
    console.error('❌ Lỗi khi xoá dữ liệu:', err);
  });
