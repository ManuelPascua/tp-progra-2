const db = require('../database/models')
const Op= db.Sequelize.Op;
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
    search: function(req,req){
        db.Product.findAll({
            where:{
                [Op.or]: [{
                    model:{
                        [Op.like]:"%" + req.query.search + "%"
                    }

                },{
                    marca:{
                        [Op.like]:"%" + req.query.search + "%"
                    }
                }]
            }

        })
        .then(productos => {
            console.log(productos)
            if (productos == []) {
                res.render('search', {
                    productos: productos,
                })
            }
            res.render('search', {
                productos: productos,
            })
        })

    }
    

}

module.exports=main