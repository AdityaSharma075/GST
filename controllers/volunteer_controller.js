const volunteerMailer = require('../mailers/volunteer_mailer');
module.exports.volunteer = function(req,res){
    return res.render("volunteer")
}

module.exports.create = function(req,res){
    volunteerMailer.newVolunteer(req.body);
    volunteerMailer.newVolunteerInfo(req.body);
    res.redirect('back');
}