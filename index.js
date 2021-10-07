// require express 
const express = require ('express');
const bodyParser=require('body-parser');
const ejs =require('ejs');
const app = express();

// port on which our server will run
const port = 8000;

app.use('/' , require('./routes'));
app.set('views','./views');
app.use(express.static('./assets'));
app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static("public"));
// Make server listen to our port
app.listen(port ,function(err){
    if(err){
        console.log(`error in loading the server :${port}`);
        return;
    }
    console.log(`System is up and running on port :${port}`);
});