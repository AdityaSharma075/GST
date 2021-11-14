const express = require('express');
const router = express.Router();

const donateController = require('../controllers/donate_controller')


router.get('/' , donateController.donate);
router.post('/confirm',donateController.confirm)
router.post('/thankyou',donateController.thankyou)


module.exports = router;