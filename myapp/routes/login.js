var expres=require('express');
var router=expres.Router();
const login = require('../controllers/loginController')

/* Get home page. */
router.get('/',login.index);
router.post('/', login.login);
module.exports = router;