const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/profileControllers')

router.get('/profile',mainController.index);
router.get('/edit',mainController.edit);


module.exports = router;