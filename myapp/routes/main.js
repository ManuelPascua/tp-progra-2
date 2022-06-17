const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/mainController')

router.get('/',mainController.index);

router.get('/register',mainController.register);

router.get('/login',mainController.login);

router.get('/search', mainController.search)





module.exports = router;