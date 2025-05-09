const express = require('express');
const router = express.Router();
const newsCategoryController = require('../controllers/newsCategoryController');

router
  .route('/')
  .get(newsCategoryController.getAllCategories)  // <-- Quan trọng: cần khai báo đúng
  .post(newsCategoryController.createCategory);

router
  .route('/:id')
  .get(newsCategoryController.getCategoryById)
  .patch(newsCategoryController.updateCategory)
  .delete(newsCategoryController.deleteCategory);

module.exports = router;
