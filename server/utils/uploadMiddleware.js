// middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Cấu hình nơi lưu ảnh
const currentYear = new Date().getFullYear();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";

    if (file.fieldname === "thumbnail" || file.fieldname === "images") {
      folder = path.join(__dirname, "../public/uploads/images", String(currentYear));
    } else if (file.fieldname === "pdf_file") {
      folder = path.join(__dirname, "../public/uploads/pdfs", String(currentYear));
    }

    fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // giữ nguyên tên file gốc
  }
});

// Filter loại file (tùy chọn)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|pdf/; // thêm pdf
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Chỉ hỗ trợ ảnh JPG, PNG, GIF, WEBP hoặc file PDF'));
  }
};


const upload = multer({ storage, fileFilter });

module.exports = upload;
