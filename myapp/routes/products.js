const expres=require('express');
const router=expres.Router();

const mainController=require('../controllers/productsController')

router.get('/',mainController.index);
module.exports = router;