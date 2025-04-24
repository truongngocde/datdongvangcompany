const mongoose = require("mongoose");
const validator = require("validator");
const NewsCategory = require("./newsCategoriesModel");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tiêu đề bài viết là bắt buộc"],
      trim: true,
      maxlength: [200, "Tiêu đề không được vượt quá 200 ký tự"],
    },
    slug: {
      type: String,
      required: [true, "Slug là bắt buộc"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, "Slug chỉ chứa ký tự a-z, 0-9 và dấu gạch ngang"],
    },
    summary: {
      type: String,
      trim: true,
      maxlength: [500, "Tóm tắt không được vượt quá 500 ký tự"],
    },
    content: {
      type: String,
      // required: [true, 'Nội dung bài viết là bắt buộc']
    },
    // pdf
    pdf_file: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /\.(pdf)$/i.test(v);
        },
        message: (props) =>
          `${props.value} không phải là đường dẫn file PDF hợp lệ`,
      },
    },
    thumbnail: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /\.(jpg|jpeg|png|webp|gif)$/i.test(v);
        },
        message: (props) =>
          `${props.value} không phải là đường dẫn hình ảnh hợp lệ`,
      },
    },
    images: [
      {
        type: String,
        validate: {
          validator: function (v) {
            return !v || /\.(jpg|jpeg|png|webp|gif)$/i.test(v);
          },
          message: (props) =>
            `${props.value} không phải là đường dẫn hình ảnh hợp lệ`,
        },
      },
    ],

    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "news_categories", // Đổi thành tên model chính xác
      required: [true, "Danh mục bài viết là bắt buộc"],
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    author: {
      name: {
        type: String,
        // required: [true, 'Tên tác giả là bắt buộc'],
        trim: true,
      },
      email: {
        type: String,
        // required: [true, 'Email tác giả là bắt buộc'],
        trim: true,
        lowercase: true,
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: (props) => `${props.value} không phải là email hợp lệ`,
        },
      },
    },
    is_published: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Thêm index để tối ưu query
newsSchema.index({ title: "text", summary: "text", content: "text" });
newsSchema.index({ slug: 1 }, { unique: true });
newsSchema.index({ category_id: 1 });
newsSchema.index({ "author.email": 1 });
newsSchema.index({ is_published: 1, created_at: -1 });

const NewsPost = mongoose.model("news_posts", newsSchema);
module.exports = NewsPost;
