const Project = require('../models/project');

module.exports.project = async function(req,res){
    let projects = await Project.find({})
    .sort(' -createdAt');


    return res.render("project" , {
        projects : projects
    })
}

module.exports.create= function(req,res){
    Project.findOne({title : req.body.title} , function(err , user){
        if(err){ console.log('Eroor in finding in the DataBase')};

        if(!user){
        
            
            Project.create({
                title : req.body.title,
                body : req.body.body,
                image : Project.imagePath + '/' + req.file.filename
            }, function(err){
                if(err){ console.log('Eroor in Creting Data in DataBase',err)};
            })
            return res.redirect('back')
        }else{
            return res.redirect('back')
        }
    })
}