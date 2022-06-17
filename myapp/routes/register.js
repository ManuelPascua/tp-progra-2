const expres=require('express');
const router=expres.Router();

const registerController=require('../controllers/registerControllers')

router.get('/',registerController,createUser)