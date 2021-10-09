const Admin = require('../models/admin');

module.exports.admin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('admin');
}
module.exports.createSession = function(req,res){
    
    return res.redirect('/');
}

