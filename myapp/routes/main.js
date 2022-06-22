const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/mainController')

router.get('/',mainController.index);

router.get('/login',mainController.login);

router.get('/search', mainController.search);

router.post('/logout', mainController.logout)


module.exports = router;