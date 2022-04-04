const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/profileControllers')

router.get('/',mainController.index);



module.exports = router;