const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  memberId: { type: String, required: true },  // e.g. "member-1"
  quote:    { type: String, required: true },
  author:   { type: String, required: true },
  title:    { type: String, default: '' },
  company:  { type: String, default: '' },
  avatar:   { type: String, default: null },
  rating:   { type: Number, min: 1, max: 5, default: 5 },
  verified: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

TestimonialSchema.index({ memberId: 1 });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
