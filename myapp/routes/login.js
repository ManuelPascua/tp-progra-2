const expres=require('express');
const router=expres.Router();

const loginController = require('../controllers/loginController')

router.get('/',loginController.index);
router.post('/', loginController.login);



module.exports = router;