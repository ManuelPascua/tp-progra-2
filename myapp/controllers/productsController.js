
const db = require('../database/models');


const products= {
  
    buscarPorID:function(req,res){

        db.Product.findByPk(req.params.id)
        .then(function(producto){

            return res.render('product', {
                producto: producto
            });

        })
        










        // const autosPorId=[]
        // const idBuscado=req.params.id
        // for (let i = 0; i < data.productos.length; i++) {
        //     if (idBuscado == data.productos[i].id) {
        //         autosPorId.push(data.productos[i])
                
        //     }
            
        // }
        // if (autosPorId.length>0) {
        //     return res.render('products',{
        //         lista:data.comentarios,
        //         auto: autosPorId[0],
        //         profile:data.usuario,
                
        //     })
        // }

    },
    
    productAdd: function(req,res){
        return res.render('product-add',{
            profile: data.usuario
        })
    },
    
}



module.exports= products
