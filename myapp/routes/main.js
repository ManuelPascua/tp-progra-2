const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/mainController')

router.get('/',mainController.index);

router.get('/profile',mainController.profile);

router.get('/index',mainController.index);

router.get('/register',mainController.register);

router.get('/products',mainController.products)



module.exports = router;