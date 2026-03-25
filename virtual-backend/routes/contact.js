const express = require('express');
const {
  submitGeneralContact,
  submitMemberContact,
  getSubmissions,
  updateSubmission,
  respondToSubmission
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const { validateBody } = require('../middleware/validation');
const { contactSchema } = require('../utils/validators');
const { contactLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Public
router.post('/', contactLimiter, validateBody(contactSchema), submitGeneralContact);
router.post('/member/:memberId', contactLimiter, validateBody(contactSchema), submitMemberContact);

// Admin
router.use(protect);
router.get('/', getSubmissions);
router.put('/:submissionId', updateSubmission);
router.post('/:submissionId/respond', respondToSubmission);

module.exports = router;
