const expres=require('express');
const router=expres.Router();
const registerController=require('../controllers/registerController')

// router.get('/',registerController.createUser);

// Requiero modulos de multer y path * /
const multer = require('multer')
const path = require('path')

// * configuro Multer * /
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  var upload = multer({
    storage: storage
  })
  
  /* GET home page. */
  router.get('/', registerController.index);
  router.post('/', upload.single('portada'), registerController.createUser);
  

module.exports=router;

