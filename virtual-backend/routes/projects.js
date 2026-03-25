const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const { protect } = require('../middleware/auth');
const { validateBody } = require('../middleware/validation');
const { projectSchema } = require('../utils/validators');

const router = express.Router();

router.get('/', getProjects);
router.get('/:projectId', getProject);

router.use(protect);
router.post('/', validateBody(projectSchema), createProject);
router.put('/:projectId', validateBody(projectSchema), updateProject);
router.delete('/:projectId', deleteProject);

module.exports = router;
