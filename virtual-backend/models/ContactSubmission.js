const mongoose = require('mongoose');
const { CONTACT_STATUS } = require('../config/constants');

const ContactSubmissionSchema = new mongoose.Schema({
  type:           { type: String, enum: ['general', 'member-specific'], default: 'general' },
  targetMemberId: { type: String, default: null },

  // Sender
  name:    { type: String, required: true, trim: true },
  email:   { type: String, required: true, lowercase: true, trim: true },
  phone:   { type: String, default: '' },
  company: { type: String, default: '' },

  // Message
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true },

  // Status
  status:       { type: String, enum: CONTACT_STATUS, default: 'new' },
  responded:    { type: Boolean, default: false },
  responseText: { type: String, default: '' },
  ipAddress:    { type: String, default: '' },
  archived:     { type: Boolean, default: false },

  submittedAt:  { type: Date, default: Date.now },
  respondedAt:  { type: Date, default: null },
}, {
  timestamps: true,
});

ContactSubmissionSchema.index({ status: 1 });
ContactSubmissionSchema.index({ targetMemberId: 1 });
ContactSubmissionSchema.index({ submittedAt: -1 });

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema);
