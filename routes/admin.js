const express = require('express');
const router = express.Router();
const passport = require('passport');

const admin_controller =require('../controllers/admin_controller');

router.get('/' , admin_controller.admin)
router.get('/login',passport.authenticate( 'local', {failureRedirect: '/admin'}),admin_controller.createSession);

module.exports = router;