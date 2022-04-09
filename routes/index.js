const express = require('express');
const home_controller = require('../controllers/home_controller');

const router = express.Router();

router.get('/', home_controller.home);
router.use('/about', require('./about'));
router.use('/projects', require('./project'));
router.use('/admin', require('./admin'));
router.use('/volunteer', require('./volunteer'));
router.use('/donate', require('./donate'));

module.exports = router;
