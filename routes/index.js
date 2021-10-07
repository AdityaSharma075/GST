const express = require('express');
const home_controller = require('../controllers/home_controller')
const about_controller=require('../controllers/about_controller');
const project_controller=require('../controllers/project_controller');
const volunteer_controller=require('../controllers/volunteer_controller');
const router = express.Router();

router.get('/',home_controller.home);
router.get('/about',require('./about'));
router.get('/project',require('./project'));
router.get('/volunteer',require('./volunteer'));

module.exports = router;