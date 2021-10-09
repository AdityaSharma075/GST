const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');

passport.use(new LocalStrategy(
    function(username , password,done){
        Admin.findOne({ username : username} , function(err , user){
            if(err){console.log("Error in passport-> local" , err); return done(err);}
            if(!user || user.password != password ){
                console.log("Invalid Username/Password");
                return done(null , false);                
            }

            return done(null, user);
        })

}));

passport.serializeUser(function(user,done){
    done(null , user.id);
});

passport.deserializeUser(function(id , done){
    Admin.findById(id, function(err,user){
        if(err){console.log('Error in finding the user - > passport'); return done(err) }
        return done(null, user);

    })
});

passport.checkAuthentication =function(req,res , next){
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;