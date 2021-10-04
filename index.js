// require express 
const express = require ('express');
const app = express();

// port on which our server will run
const port = 8000;

app.use('/' , require('./routes'));

// Make server listen to our port
app.listen(port ,function(err){
    if(err){
        console.log(`error in loading the server :${port}`);
        return;
    }
    console.log(`System is up and running on port :${port}`);
});