const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/productsController')

router.get('/',mainController.index);
router.get('/product-add',mainController.productAdd);


module.exports = router;