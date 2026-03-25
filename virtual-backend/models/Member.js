const mongoose = require('mongoose');
const { ROLES } = require('../config/constants');

const WhatIDoSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  icon:        { type: String, default: 'star' },
}, { _id: false });

const SocialLinksSchema = new mongoose.Schema({
  linkedin:  { type: String, default: '' },
  github:    { type: String, default: '' },
  twitter:   { type: String, default: '' },
  instagram: { type: String, default: '' },
  portfolio: { type: String, default: '' },
  behance:   { type: String, default: '' },
  dribbble:  { type: String, default: '' },
}, { _id: false });

const MemberSchema = new mongoose.Schema({
  memberId:  { type: String, required: true, unique: true, lowercase: true, trim: true },
  name:      { type: String, required: true, trim: true },
  title:     { type: String, required: true },
  role:      { type: String, required: true, enum: ROLES },
  email:     { type: String, required: true, unique: true, lowercase: true },
  phone:     { type: String, default: '' },

  // Media
  profileImage: { type: String, default: null },
  coverImage:   { type: String, default: null },

  // Content
  bio:      { type: String, default: '' },
  shortBio: { type: String, default: '' },
  tagline:  { type: String, default: '' },

  // Skills
  skills:    [{ type: String }],
  tools:     [{ type: String }],
  expertise: [{ type: String }],

  whatIDo:   [WhatIDoSchema],
  socialLinks: { type: SocialLinksSchema, default: () => ({}) },

  resume:   { type: String, default: null },

  // Portfolio
  portfolioPath:     { type: String, default: null },
  portfolioTemplate: { type: String, enum: ['custom', 'standard'], default: 'standard' },
  customPortfolioUrl:{ type: String, default: null },

  // Relations (stored as strings for simplicity with JSON fallback)
  projectIds:     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  testimonialIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Testimonial' }],

  // Meta
  joinDate:    { type: Date, default: Date.now },
  isActive:    { type: Boolean, default: true },
  orderInGrid: { type: Number, default: 0 },
  featured:    { type: Boolean, default: false },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Virtual: public-safe id
MemberSchema.virtual('id').get(function() { return this.memberId; });

// Index for filtering
MemberSchema.index({ role: 1 });
MemberSchema.index({ orderInGrid: 1 });

module.exports = mongoose.model('Member', MemberSchema);
