const jwt = require('jsonwebtoken');
const config = require('../config/environment');

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE,
  });
};

// POST /api/v1/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check against ENV configured admin credentials (DB users not strictly needed for just a basic admin panel here)
    if (email === config.ADMIN_EMAIL && password === config.ADMIN_PASSWORD) {
      const token = generateToken('admin-001', email, 'admin');
      return res.status(200).json({
        success: true,
        token,
        user: { id: 'admin-001', email, role: 'admin' }
      });
    }

    res.status(401).json({
      success: false,
      error: { code: 'AUTH_FAILED', message: 'Invalid credentials' }
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/auth/logout
const logout = (req, res) => {
  // Real world: add token to Redis blacklist, or clear cookie if using cookies
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};

module.exports = { login, logout };
