const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://dbGst:Gst%40dbGst@gst.xa9my.mongodb.net/GST_DEVELOPMENT?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error' , function(){
    console.log('Error connectng to DataBase :: MongoDB');

})

db.once('open' , function(){
    console.log('Sucessfully connected to DataBase :: MongoDB');
})

module.exports = db;