const express = require('express');
const { login, logout } = require('../controllers/authController');
const { validateBody } = require('../middleware/validation');
const { loginSchema } = require('../utils/validators');
const { loginLimiter } = require('../middleware/rateLimiter');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/login', loginLimiter, validateBody(loginSchema), login);
router.post('/logout', protect, logout);

module.exports = router;
