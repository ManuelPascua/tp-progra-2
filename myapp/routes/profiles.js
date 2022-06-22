const expres=require('express');
const router=expres.Router();

const profileController=require('../controllers/profileControllers')

router.get('/:id',profileController.index);
router.get('/edit/:id',profileController.edit);
router.post('/edit/:id', profileController.update);

module.exports = router;






