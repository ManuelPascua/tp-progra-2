const expres=require('express');
const router=expres.Router();

const profileController=require('../controllers/profileControllers')

router.get('/',profileController.index);
router.get('/edit',profileController.edit);

module.exports = router;






