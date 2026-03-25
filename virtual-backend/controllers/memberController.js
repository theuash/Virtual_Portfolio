const Member = require('../models/Member');

// GET /api/v1/members
const getMembers = async (req, res, next) => {
  try {
    const { role, sort = 'orderInGrid', limit = 12, skip = 0 } = req.query;
    const query = {};
    if (role) query.role = role;

    const limitNum = parseInt(limit, 10);
    const skipNum = parseInt(skip, 10);

    const members = await Member.find(query)
      .sort(sort)
      .skip(skipNum)
      .limit(limitNum);

    const total = await Member.countDocuments(query);

    res.status(200).json({
      success: true,
      data: members,
      meta: { total, returned: members.length }
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/v1/members/:memberId
const getMember = async (req, res, next) => {
  try {
    const member = await Member.findOne({ memberId: req.params.memberId })
      .populate('projectIds')
      .populate('testimonialIds');

    if (!member) {
      return res.status(404).json({ success: false, error: { message: 'Member not found' } });
    }

    res.status(200).json({ success: true, data: member });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/members (Admin Only)
const createMember = async (req, res, next) => {
  try {
    const newMember = await Member.create(req.body);
    res.status(201).json({ success: true, data: newMember, message: 'Member created successfully' });
  } catch (err) {
    next(err);
  }
};

// PUT /api/v1/members/:memberId (Admin Only)
const updateMember = async (req, res, next) => {
  try {
    const member = await Member.findOneAndUpdate(
      { memberId: req.params.memberId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({ success: false, error: { message: 'Member not found' } });
    }

    res.status(200).json({ success: true, data: member, message: 'Member updated successfully' });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/v1/members/:memberId (Admin Only)
const deleteMember = async (req, res, next) => {
  try {
    const member = await Member.findOneAndDelete({ memberId: req.params.memberId });
    if (!member) {
      return res.status(404).json({ success: false, error: { message: 'Member not found' } });
    }
    res.status(200).json({ success: true, message: 'Member deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };
