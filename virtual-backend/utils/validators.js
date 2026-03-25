const Joi = require('joi');
const { ROLES } = require('../config/constants');

// Auth validation
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Contact Submission validation
const contactSchema = Joi.object({
  type: Joi.string().valid('general', 'member-specific').default('general'),
  name: Joi.string().trim().required().messages({'string.empty': 'Name processing required'}),
  email: Joi.string().email().required(),
  subject: Joi.string().trim().required(),
  message: Joi.string().trim().required(),
  phone: Joi.string().allow('', null),
  company: Joi.string().allow('', null),
});

// Member validation (simplified for basic creation/updates)
const memberSchema = Joi.object({
  memberId: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  title: Joi.string().required(),
  role: Joi.string().valid(...ROLES).required(),
  email: Joi.string().email().required(),
  bio: Joi.string().allow('', null),
  skills: Joi.array().items(Joi.string()),
  // Allow other fields to pass for now, or you could strictly define them all
}).unknown(true);

// Project validation
const projectSchema = Joi.object({
  projectId: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
  category: Joi.string().required(),
}).unknown(true);

module.exports = {
  loginSchema,
  contactSchema,
  memberSchema,
  projectSchema
};
