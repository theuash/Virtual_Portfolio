const rateLimit = require('express-rate-limit');

// General API rate limiting (can be applied globally if desired)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many requests from this IP, please try again after 15 minutes'
    }
  }
});

// Stricter rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 feedback/contact submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many contact submissions from this IP, please try again in an hour'
    }
  }
});

// Login limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 5,
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many login attempts, please try again after 15 minutes'
    }
  }
});

module.exports = {
  apiLimiter,
  contactLimiter,
  loginLimiter
};
