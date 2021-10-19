// require express 
const express = require ('express');
const app = express();
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const path = require('path');

const port = 8000;

app.use(express.urlencoded());
app.use(cookieParser());
app.use('/uploads' , express.static(path.join(__dirname ,  '/uploads') ));
app.use(express.static('./assets'));


app.set('views','./views');
app.set('view engine','ejs');

app.use(session({
    name : 'GST',
    secret : "Harsh",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create(
        {
             mongoUrl: 'mongodb+srv://dbGst:Gst%40dbGst@gst.xa9my.mongodb.net/GST_DEVELOPMENT?retryWrites=true&w=majority' ,
             autoRemove: 'disabled'
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/' , require('./routes'));

// Make server listen to our port
app.listen(port ,function(err){
    if(err){
        console.log(`error in loading the server :${port}`);
        return;
    }
    console.log(`System is up and running on port :${port}`);
});