const express = require('express');
const {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getTestimonials);

router.use(protect);
router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;
