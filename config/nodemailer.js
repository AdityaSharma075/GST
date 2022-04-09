const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const enviornment = require('./enviornment');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: enviornment.gmail_user,
    pass: enviornment.gmail_pass,
  },
});

let renderTemplate = (data, relativePath) => {
  let mailHTML;
  ejs.renderFile(
    path.join(__dirname, '../views/mailers', relativePath),
    data,
    function (err, template) {
      if (err) {
        console.log('Error in rendering the template ', err);
      }
      mailHTML = template;
    }
  );
  return mailHTML;
};

module.exports = {
  transporter: transporter,
  renderTemplate: renderTemplate,
};
