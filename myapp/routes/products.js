const expres=require('express');
const router=expres.Router();

const productsController=require('../controllers/productsController')


router.get('/id/:id',productsController.buscarPorID);
router.get('/product-add',productsController.productAdd);


module.exports = router;