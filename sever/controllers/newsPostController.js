const NewsPost = require("../models/newsPostModel");
const path = require("path");
const fs = require("fs");
const currentYear = new Date().getFullYear();

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await NewsPost.find().populate("category_id");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server khi lấy danh sách bài viết" });
  }
};

// GET post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await NewsPost.findById(req.params.id).populate("category_id");
    if (!post)
      return res.status(404).json({ error: "Không tìm thấy bài viết" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server khi lấy bài viết" });
  }
};

// CREATE post
// controllers/newsPostController.js
exports.createPost = async (req, res) => {
  try {
    const body = req.body;

    // Thumbnail
    if (req.files?.thumbnail?.length) {
      const file = req.files.thumbnail[0];
      req.body.thumbnail = path
        .join("uploads/images", currentYear.toString(), file.filename)
        .replace(/\\/g, "/");
    }

    // Images
    if (req.files?.images?.length) {
      req.body.images = req.files.images.map((file) =>
        path
          .join("uploads/images", currentYear.toString(), file.filename)
          .replace(/\\/g, "/")
      );
    }

    // PDF
    if (req.files?.pdf_file?.length) {
      const file = req.files.pdf_file[0];
      req.body.pdf_file = path
        .join("uploads/pdfs", currentYear.toString(), file.filename)
        .replace(/\\/g, "/");
    }
    // Nếu gửi tags là chuỗi, tách thành mảng
    if (typeof body.tags === "string") {
      body.tags = body.tags.split(",").map((tag) => tag.trim());
    }

    // Parse author nếu gửi dạng JSON string (do form-data không gửi object trực tiếp)
    if (typeof body.author === "string") {
      body.author = JSON.parse(body.author);
    }

    const newPost = await NewsPost.create(body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE post
exports.updatePost = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // Lấy bài viết hiện tại để xóa ảnh cũ nếu có
    const oldPost = await NewsPost.findById(req.params.id);
    if (!oldPost)
      return res.status(404).json({ error: "Không tìm thấy bài viết" });

    // Nếu có thumbnail mới → xóa ảnh cũ
    if (req.files && req.files.thumbnail) {
      if (oldPost.thumbnail) {
        const oldThumbPath = path.join(
          __dirname,
          "../public",
          oldPost.thumbnail
        );
        if (fs.existsSync(oldThumbPath)) fs.unlinkSync(oldThumbPath);
      }
      updateData.thumbnail = "uploads/" + req.files.thumbnail[0].filename;
    }

    // Nếu có images mới → xóa ảnh cũ
    if (req.files && req.files.images) {
      if (Array.isArray(oldPost.images)) {
        oldPost.images.forEach((img) => {
          const imgPath = path.join(__dirname, "../public", img);
          if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
        });
      }
      updateData.images = req.files.images.map(
        (file) => "uploads/" + file.filename
      );
    }
    // Nếu có file PDF mới → xóa file PDF cũ
    if (req.files?.pdf_file?.length) {
      if (oldPost.pdf_file) {
        const oldPdfPath = path.join(__dirname, "../public", oldPost.pdf_file);
        if (fs.existsSync(oldPdfPath)) fs.unlinkSync(oldPdfPath);
      }
      updateData.pdf_file = "uploads/" + req.files.pdf_file[0].filename;
    }

    const updatedPost = await NewsPost.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE post
exports.deletePost = async (req, res) => {
  try {
    const deleted = await NewsPost.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ error: "Không tìm thấy bài viết" });
    res.json({ message: "Xóa bài viết thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi server khi xóa bài viết" });
  }
};
