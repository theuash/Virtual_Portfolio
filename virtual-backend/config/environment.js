require('dotenv').config();

const required = ['JWT_SECRET'];
const missing = required.filter(k => !process.env[k]);
if (missing.length) {
  console.warn(`[ENV] Missing env vars: ${missing.join(', ')} — using defaults`);
}

module.exports = {
  NODE_ENV:      process.env.NODE_ENV || 'development',
  PORT:          parseInt(process.env.PORT, 10) || 5000,
  MONGODB_URI:   process.env.MONGODB_URI || 'mongodb://localhost:27017/virtual',
  JWT_SECRET:    process.env.JWT_SECRET || 'dev_fallback_secret',
  JWT_EXPIRE:    process.env.JWT_EXPIRE || '7d',
  ADMIN_EMAIL:   process.env.ADMIN_EMAIL || 'admin@virtual.studio',
  ADMIN_PASSWORD:process.env.ADMIN_PASSWORD || 'Virtual@Admin2026!',
  UPLOAD_DIR:    process.env.UPLOAD_DIR || './uploads',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE, 10) || 5 * 1024 * 1024,
  CORS_ORIGIN:   process.env.CORS_ORIGIN || 'http://localhost:5173',
  FRONTEND_URL:  process.env.FRONTEND_URL || 'http://localhost:5173',
  NOTIFY_EMAIL:  process.env.NOTIFY_EMAIL || 'hello@virtual.studio',
  SMTP: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};
