const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  // Log logic
  logger.error(`${err.name}: ${err.message}\n${err.stack}`);

  // Base error response
  const errorResponse = {
    code: err.name || 'SERVER_ERROR',
    message: err.message || 'Server Error',
  };

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Handle Mongoose/MongoDB specific errors
  if (err.name === 'CastError') {
    errorResponse.code = 'INVALID_ID';
    errorResponse.message = `Resource not found with id of ${err.value}`;
    statusCode = 404;
  }

  if (err.code === 11000) {
    errorResponse.code = 'DUPLICATE_RESOURCE';
    errorResponse.message = 'Duplicate field value entered';
    statusCode = 409;
  }

  if (err.name === 'ValidationError') {
    errorResponse.code = 'VALIDATION_ERROR';
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    errorResponse.message = message;
    statusCode = 400;
  }

  // Handle Multer errors
  if (err.name === 'MulterError') {
    errorResponse.code = 'UPLOAD_ERROR';
    statusCode = 400;
  }

  res.status(statusCode).json({
    success: false,
    error: errorResponse,
  });
};

module.exports = errorHandler;
