const mongoose = require('mongoose');

const newsCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Tên danh mục là bắt buộc'],
      trim: true,
      unique: true
    },
    slug: {
      type: String,
      required: [true, 'Slug là bắt buộc'],
      trim: true,
      unique: true,
      lowercase: true
    },
    description: {
      type: String,
      trim: true
    }
  }, {
    timestamps: true // Tự động thêm createdAt và updatedAt
  });
  
  const NewsCategory = mongoose.model('news_categories', newsCategorySchema);
  module.exports = NewsCategory;