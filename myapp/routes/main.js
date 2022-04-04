const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/mainController')

router.get('/',mainController.index);

router.get('/profile',mainController.profile);



module.exports = router;