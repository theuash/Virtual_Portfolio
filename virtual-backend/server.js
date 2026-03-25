require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const config = require('./config/environment');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();

// Connect to DB
connectDB();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: config.CORS_ORIGIN.split(','),
  credentials: true
}));
app.use(apiLimiter);

// General Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Serve static files from uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount API Routes
app.use('/api/v1', routes);

// Health Check
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ success: true, message: 'VIRTUAL API is running', uptime: process.uptime() });
});

// Fallback 404
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: { message: `Route not found - ${req.originalUrl}` } });
});

// Global Error Handler
app.use(errorHandler);

// Start Server
const PORT = config.PORT;
const server = app.listen(PORT, () => {
  logger.info(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  // In production, might want to close server & exit process
  // server.close(() => process.exit(1));
});
