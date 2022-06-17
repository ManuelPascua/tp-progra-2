const expres=require('express');
const router=expres.Router();

const registerController=require('../controllers/registerController')

router.get('/',registerController.createUser);


module.exports=router