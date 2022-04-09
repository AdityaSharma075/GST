const razorPay = require('../config/razorPay');
const crypto = require('crypto');
const env = require('../config/enviornment');
module.exports.donate = function (req, res) {
  return res.render('Donate');
};

module.exports.confirm = function (req, res) {
  var options = {
    amount: req.body.amount * 100, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };
  razorPay.instance.orders.create(options, function (err, order) {
    // console.log(order);
    return res.status(200).json({
      data: {
        order: order,
      },
      message: 'order created!',
    });
  });
};

module.exports.thankyou = function (req, res) {
  const secret = env.razorPaySecret;
  const hash = crypto
    .createHmac('sha256', secret)
    .update(
      `${req.body.razorpay_order_id}` + '|' + `${req.body.razorpay_payment_id}`
    )
    .digest('hex');

  if (hash == req.body.razorpay_signature) {
    res.render('thankyou');
  } else {
    res.redirect('back');
  }
};
