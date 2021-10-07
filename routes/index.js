const express = require('express');

const home_controller = require('../controllers/home_controller')

const router = express.Router();

router.get('/',home_controller.home);
router.get('/about' ,require('./about'));
router.get('/projects' , require('./projects'));
router.get('/volunteers' , require('./volunteers'));


module.exports = router;