const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectId: { type: String, required: true, unique: true, lowercase: true, trim: true },
  title:     { type: String, required: true, trim: true },
  category:  { type: String, required: true },

  // Description
  description:     { type: String, default: '' },
  longDescription: { type: String, default: '' },

  // Media
  thumbnail: { type: String, default: null },
  images:    [{ type: String }],
  videoUrl:  { type: String, default: null },

  // Member Association (store memberId strings for JSON-fallback compat)
  memberIds: [{ type: String }],
  lead:      { type: String, default: null },

  // Content
  tags:         [{ type: String }],
  technologies: [{ type: String }],
  challenge:    { type: String, default: '' },
  solution:     { type: String, default: '' },
  results:      { type: String, default: '' },

  // Links
  liveUrl:      { type: String, default: null },
  githubUrl:    { type: String, default: null },
  caseStudyUrl: { type: String, default: null },

  // Classification
  featured:    { type: Boolean, default: false },
  highlighted: { type: Boolean, default: false },
  color:       { type: String, default: '#935F4C' },

  // Meta
  completionDate: { type: Date, default: null },
  duration:       { type: String, default: '' },
  clientName:     { type: String, default: '' },
  publishedAt:    { type: Date, default: Date.now },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

ProjectSchema.virtual('id').get(function() { return this.projectId; });

ProjectSchema.index({ category: 1 });
ProjectSchema.index({ featured: 1 });
ProjectSchema.index({ memberIds: 1 });

module.exports = mongoose.model('Project', ProjectSchema);
