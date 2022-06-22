const expres=require('express');
const router=expres.Router();
const multer = require('multer')


const productsController=require('../controllers/productsController')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  var upload = multer({
    storage: storage
  })
  

router.get('/id/:id',productsController.buscarPorID);
router.get('/product-add',productsController.productAdd);
router.post('/add',productsController.create);
router.post('/edit',productsController.update);


module.exports = router;