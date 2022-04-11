const data = require('../db/db')
const dataController = require('../db/db')

const main={
    index: function(req,res){
        return res.render('index', {
            lista : dataController.productos
        })

            
    },
    register: function(req,res){
        return res.render('register')
    },
    login: function(req,res){
        return res.render('login')
    },
    

}

module.exports=main