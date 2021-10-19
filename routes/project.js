const express = require('express');
// const multer = require('multer');
const Project = require('../models/project');

const router = express.Router();

// const upload = multer({ dest: 'uploads/project/images/' })
const project_controller=require('../controllers/project_controller');

router.get('/',project_controller.project);
router.post('/create' , project_controller.create);

module.exports = router;