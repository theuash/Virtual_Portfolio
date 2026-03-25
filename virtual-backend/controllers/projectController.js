const Project = require('../models/Project');

// GET /api/v1/projects
const getProjects = async (req, res, next) => {
  try {
    const { memberId, category, featured, sort = '-publishedAt', limit = 20, skip = 0 } = req.query;
    const query = {};

    if (memberId) query.memberIds = memberId;
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;

    const limitNum = parseInt(limit, 10);
    const skipNum = parseInt(skip, 10);

    const projects = await Project.find(query)
      .sort(sort)
      .skip(skipNum)
      .limit(limitNum);

    const total = await Project.countDocuments(query);

    res.status(200).json({
      success: true,
      data: projects,
      meta: { total, returned: projects.length }
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/v1/projects/:projectId
const getProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({ projectId: req.params.projectId });
    if (!project) {
      return res.status(404).json({ success: false, error: { message: 'Project not found' } });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

// POST /api/v1/projects (Admin)
const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project, message: 'Project created successfully' });
  } catch (err) {
    next(err);
  }
};

// PUT /api/v1/projects/:projectId (Admin)
const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findOneAndUpdate(
      { projectId: req.params.projectId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!project) {
      return res.status(404).json({ success: false, error: { message: 'Project not found' } });
    }
    res.status(200).json({ success: true, data: project, message: 'Project updated successfully' });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/v1/projects/:projectId (Admin)
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findOneAndDelete({ projectId: req.params.projectId });
    if (!project) {
      return res.status(404).json({ success: false, error: { message: 'Project not found' } });
    }
    res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };
