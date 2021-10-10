const express = require('express');
const about_controller=require('../controllers/about_controller');
const router = express.Router();

router.get('/',about_controller.about);
router.get('/story',about_controller.story);
 router.get('/team',about_controller.team);
  router.get('/mission',about_controller.mission);

module.exports = router;