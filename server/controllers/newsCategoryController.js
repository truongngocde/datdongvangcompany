const NewsCategory = require('../models/newsCategoriesModel');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await NewsCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server khi lấy danh sách danh mục' });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await NewsCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Không tìm thấy danh mục' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server khi lấy danh mục' });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await NewsCategory.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updated = await NewsCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ error: 'Không tìm thấy danh mục' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await NewsCategory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Không tìm thấy danh mục' });
    res.json({ message: 'Xóa danh mục thành công' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server khi xóa danh mục' });
  }
};
