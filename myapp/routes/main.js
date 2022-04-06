const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/mainController')

router.get('/',mainController.index);

router.get('/profile',mainController.profile);

router.get('/index',mainController.index);/// estoy casi seguro que esto esta mal 

router.get('/register',mainController.register);

router.get('/products',mainController.products)

router.get('/product-add',mainController.productAdd)

router.get('/product-edit',mainController.productEdit)

router.get('/login',mainController.login)





module.exports = router;