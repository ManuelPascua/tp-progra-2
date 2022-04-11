const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/productsController')


router.get('/id/:id',mainController.buscarPorMarca);
router.get('/product-add',mainController.productAdd);


module.exports = router;