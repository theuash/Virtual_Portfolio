const ContactSubmission = require('../models/ContactSubmission');
const emailService = require('../utils/emailService');
const Member = require('../models/Member');

// POST /api/v1/contact (General)
const submitGeneralContact = async (req, res, next) => {
  try {
    const submission = await ContactSubmission.create({ ...req.body, type: 'general' });
    
    // Background email send
    emailService.sendContactEmail(req.body);
    
    res.status(201).json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
      submissionId: submission._id
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/contact/member/:memberId (Specific)
const submitMemberContact = async (req, res, next) => {
  try {
    const memberId = req.params.memberId;
    const member = await Member.findOne({ memberId });
    
    const submission = await ContactSubmission.create({
      ...req.body,
      type: 'member-specific',
      targetMemberId: memberId
    });

    const targetEmail = member ? member.email : undefined;
    emailService.sendContactEmail(req.body, targetEmail);

    res.status(201).json({
      success: true,
      message: `Your message has been sent${member ? ` to ${member.name}` : ''}`,
      submissionId: submission._id
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/v1/contact (Admin)
const getSubmissions = async (req, res, next) => {
  try {
    const { status, memberId, sort = '-submittedAt' } = req.query;
    const query = {};
    if (status) query.status = status;
    if (memberId) query.targetMemberId = memberId;

    const subs = await ContactSubmission.find(query).sort(sort);
    res.status(200).json({ success: true, data: subs });
  } catch (err) {
    next(err);
  }
};

// PUT /api/v1/contact/:submissionId (Admin) - Mark read etc.
const updateSubmission = async (req, res, next) => {
  try {
    const sub = await ContactSubmission.findByIdAndUpdate(req.params.submissionId, req.body, { new: true });
    if (!sub) return res.status(404).json({ success: false, error: { message: 'Not found' } });
    res.status(200).json({ success: true, data: sub });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/contact/:submissionId/respond (Admin)
const respondToSubmission = async (req, res, next) => {
  try {
    const sub = await ContactSubmission.findByIdAndUpdate(
      req.params.submissionId,
      { status: 'responded', responded: true, responseText: req.body.responseText, respondedAt: Date.now() },
      { new: true }
    );
    // Ideally code to send response email back to sender goes here...
    res.status(200).json({ success: true, data: sub });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitGeneralContact, submitMemberContact, getSubmissions, updateSubmission, respondToSubmission };
