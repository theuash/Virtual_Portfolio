const express = require('express');
const {
  getMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember
} = require('../controllers/memberController');
const { protect } = require('../middleware/auth');
const { validateBody } = require('../middleware/validation');
const { memberSchema } = require('../utils/validators');

const router = express.Router();

// Public routes
router.get('/', getMembers);
router.get('/:memberId', getMember);

// Protected Admin routes
router.use(protect);
router.post('/', validateBody(memberSchema), createMember);
router.put('/:memberId', validateBody(memberSchema), updateMember);
router.delete('/:memberId', deleteMember);

module.exports = router;
