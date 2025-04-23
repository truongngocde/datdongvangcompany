const express = require("express");
const newsPostController = require("../controllers/newsPostController");
const upload = require("../utils/uploadMiddleware");
const router = express.Router();

// Routes
router.get("/", newsPostController.getAllPosts);
router.get("/:id", newsPostController.getPostById);
router.post(
  "/",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 10 },
    { name: "pdf_file", maxCount: 1 }
  ]),
  newsPostController.createPost
);
router.patch(
  "/:id",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 10 },
    { name: "pdf_file", maxCount: 1 }
  ]),
  newsPostController.updatePost
);

router.delete("/:id", newsPostController.deletePost);

module.exports = router;
