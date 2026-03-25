const jwt = require('jsonwebtoken');
const config = require('../config/environment');

/**
 * Middleware to protect routes that require authentication (Admin only for now)
 */
const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Not authorized to access this route' }
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded; // Will contain id, email, role (e.g. 'admin')
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Token is invalid or expired' }
    });
  }
};

module.exports = { protect };
