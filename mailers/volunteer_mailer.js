const nodemailer = require('../config/nodemailer');

exports.newVolunteer = (Voulenteer)=>{
    let htmlString = nodemailer.renderTemplate({Voulenteer:Voulenteer },'/volunteers/new_volunteer.ejs')
    nodemailer.transporter.sendMail({
        from : 'aditya07543@gmail.com',
        to : Voulenteer.email ,
        subject : "Request received",
        html  : htmlString
    } , (err , info)=>{
        if(err){console.log("Error in sending mail " , err);return;}
        // console.log("mail sent " , info)

    })
}

exports.newVolunteerInfo = (Voulenteer)=>{
    let htmlString = nodemailer.renderTemplate({Voulenteer:Voulenteer },'/volunteers/new_volunteers_info.ejs')
    nodemailer.transporter.sendMail({
        from : 'aditya07543@gmail.com',
        to : 'aditya07543@gmail.com' ,
        subject : " New volunteer Request received",
        html  : htmlString
    } , (err , info)=>{
        if(err){console.log("Error in sending mail " , err);return;}
        // console.log("mail sent " , info)

    })
}