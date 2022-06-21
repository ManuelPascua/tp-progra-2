const expres=require('express');
const router=expres.Router();

const profileController=require('../controllers/profileControllers')

router.get('/:id',profileController.index);
router.get('/edit',profileController.edit);
router.post('/edit', profileController.update);

module.exports = router;






