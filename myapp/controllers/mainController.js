const db = require('../database/models')
const Op= db.Sequelize.Op;
const main={
    index: function(req,res){
        db.Product.findAll({
            order:[
                ['model','ASC']
            ]
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
    
    login: function(req,res){
        return res.render('login')
    },
    search: function(req,res){
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
            },
            include: [{
                association: "comentarios",
                include: {
                    association: "usuario"
                }
            }, {
                association: "usuario"
            }],
            order: [
                ['comentarios', 'created_at', 'desc']
            ],
                
            

        })
        .then(productos => {
           db.User.findAll()
                .then(User=>
                    {res.render('search', {
                    productos: productos,
                    User: User
    
                })})
            
        })
        
    },
    logout:function(res,req){
        req.session.destroy()
        res.clearCookie('userId')
        res.redirect('/')
    }
    
    

}

module.exports=main