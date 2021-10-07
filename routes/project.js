const express = require('express');
const project_controller=require('../controllers/project_controller');
const router = express.Router();

router.get('/project',project_controller.project);

module.exports = router;