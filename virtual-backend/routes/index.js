const express = require('express');

const authRoutes = require('./auth');
const membersRoutes = require('./members');
const projectsRoutes = require('./projects');
const testimonialsRoutes = require('./testimonials');
const contactRoutes = require('./contact');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/members', membersRoutes);
router.use('/projects', projectsRoutes);
router.use('/testimonials', testimonialsRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
