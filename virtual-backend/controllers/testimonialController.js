const Testimonial = require('../models/Testimonial');

// GET /api/v1/testimonials
const getTestimonials = async (req, res, next) => {
  try {
    const { memberId } = req.query;
    const query = {};
    if (memberId) query.memberId = memberId;

    const testimonials = await Testimonial.find(query).sort('-publishedAt');
    res.status(200).json({ success: true, data: testimonials });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/testimonials (Admin)
const createTestimonial = async (req, res, next) => {
  try {
    const t = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: t, message: 'Testimonial created' });
  } catch (err) {
    next(err);
  }
};

// PUT /api/v1/testimonials/:id (Admin)
const updateTestimonial = async (req, res, next) => {
  try {
    const t = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!t) return res.status(404).json({ success: false, error: { message: 'Not found' } });
    res.status(200).json({ success: true, data: t, message: 'Testimonial updated' });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/v1/testimonials/:id (Admin)
const deleteTestimonial = async (req, res, next) => {
  try {
    const t = await Testimonial.findByIdAndDelete(req.params.id);
    if (!t) return res.status(404).json({ success: false, error: { message: 'Not found' } });
    res.status(200).json({ success: true, message: 'Testimonial deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
