const production = {
  name: 'production',
  gmail_user: process.env.GST_GMAIL_USER,
  gmail_pass: process.env.GST_GMAIL_PASS,
  razorPayKey: process.env.RAZORPAY_KEY,
  razorPaySecret: process.env.RAZORPAY_SECRET,
};

module.exports = production;
