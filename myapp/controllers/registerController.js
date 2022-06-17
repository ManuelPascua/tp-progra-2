const db= require('../database/models')


const register={
    createUser:function(req,res){
        db.User.findBy()
        return res.render('register')
    }
}

module.exports=register