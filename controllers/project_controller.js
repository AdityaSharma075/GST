const Project = require('../models/project');

module.exports.project = async function(req,res){
    let projects = await Project.find({})
    .sort(' -createdAt');


    return res.render("project" , {
        projects : projects
    })
}

module.exports.create= async function(req,res){
    try {
        const user = await Project.findOne({title : req.body.title});

        if(!user){
            Project.uploadedImage(req,res,function(err){
                if(err){console.log("***** Multer Error ******")};
                
                 
            Project.create({
                title : req.body.title,
                body : req.body.body,
                image : Project.imagePath + '/' + req.file.filename
            }, function(err){
                if(err){ console.log('Eroor in Creting Data in DataBase',err)};
            })
            return res.redirect('back');
        });
        }else{
            return res.redirect('back')
        }

    } catch (error) {
        console.log('Eroor in Creting Data in DataBase',error)
    }
    
    
}