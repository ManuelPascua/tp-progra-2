const db = require('../Database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const login={
    index: function(res,req){
        if ("condicion que cumple para que logue") {
            
            res.render('login')

        } else {
            res.redirect('/')
        }
    },
    login: function(res,req){

    }
}

module.exports=login