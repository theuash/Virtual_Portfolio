const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(`MongoDB connection failed: ${err.message}`);
    logger.warn('Running in degraded mode — seeded data will be served from JSON fallback');
    // Don't crash the process; controllers will use JSON fallback
  }
};

module.exports = connectDB;
