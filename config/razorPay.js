const Razorpay = require('razorpay');
const env = require('./enviornment');
var instance = new Razorpay({
  key_id: env.razorPayKey,
  key_secret: env.razorPaySecret,
});

module.exports = { instance };
