const db = require('../database/models')

const main={
    index: function(req,res){
        db.Product.findAll({
            
        })
            .then(function(Products){
                res.render('index',{
                    lista:Products
                })

            })





        // return res.render('index', {
        //     lista : dataController.productos
        // })

            
    },
    register: function(req,res){
        return res.render('register')
    },
    login: function(req,res){
        return res.render('login')
    },
    

}

module.exports=main