const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/productsController')

router.get('/products',mainController.index);
router.get('/product-add',mainController.productAdd);
router.get('/product-edit',mainController.productEdit);

module.exports = router;