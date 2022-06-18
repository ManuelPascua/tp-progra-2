
const db = require('../database/models');


const products= {
  
    buscarPorID:function(req,res){
        db.Product.findByPk(req.params.id, {  //params es de /:id (parametro) para un valor ene especifico
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
        }).then(producto => {
           
            db.User.findAll()
            .then(User=>{
                db.Comment.findAll()
                .then(Comment=>{
                    res.render('products',{
                        User:User[0],
                        producto:producto,
                        lista:Comment
                    })     
 
                })
            })
        })  

    },
    
    productAdd: function(req,res){
        return res.render('product-add',{
            profile: data.usuario
        })
    },
    
}



module.exports= products
