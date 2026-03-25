const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const config = require('../config/environment');

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = config.UPLOAD_DIR;
    if (file.fieldname === 'profileImage') dest = path.join(dest, 'member-images');
    if (file.fieldname === 'projectImage') dest = path.join(dest, 'project-images');
    if (file.fieldname === 'document') dest = path.join(dest, 'documents');
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    // Generate unique name to prevent overwrites
    const uniqueSuffix = crypto.randomBytes(6).toString('hex') + Date.now();
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter (images and simple documents only for security)
const fileFilter = (req, file, cb) => {
  const allowedMime = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
  if (allowedMime.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, WEBP, and PDF are allowed'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: config.MAX_FILE_SIZE },
  fileFilter: fileFilter
});

module.exports = { upload };
