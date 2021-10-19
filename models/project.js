const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const IMAGE_PATH =path.join('/uploads/project/images')

const projectSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true,
        
    },
    title : {
        type : String,
        required : true,
        unique : true
    },
    body : {
        type : String,
        required : true
    }

}, {
    timestamps : true
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , '..' , IMAGE_PATH))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() ;
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  })

projectSchema.statics.uploadedImage = multer({storage : storage}).single('image');
// const upload = multer({ storage: storage })
projectSchema.statics.imagePath = IMAGE_PATH;


const Project = mongoose.model('Project' , projectSchema);

module.exports = Project;