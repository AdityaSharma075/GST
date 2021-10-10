const express = require('express');
const volunteer_controller=require('../controllers/volunteer_controller');
const router = express.Router();

router.get('/',volunteer_controller.volunteer);

module.exports = router;