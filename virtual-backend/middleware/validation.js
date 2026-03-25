/**
 * Middleware factory for validating req.body against a Joi schema
 */
const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  
  if (error) {
    const details = error.details.map(d => ({
      field: d.path.join('.'),
      message: d.message
    }));
    
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        details
      }
    });
  }
  
  // Replace req.body with validated/stripped value
  req.body = value;
  next();
};

module.exports = { validateBody };
