const express = require('express');
const about_controller=require('../controllers/about_controller');
const router = express.Router();

router.get('/about',about_controller.about);

module.exports = router;