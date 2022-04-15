const data = require('../db/db');
const dataController = require('../db/db');


const products= {
  
    buscarPorMarca:function(req,res){

        
        const autosPorMarca=[]
        const marcaBuscada=req.params.id
        for (let i = 0; i < data.productos.length; i++) {
            if (marcaBuscada == data.productos[i].id) {
                autosPorMarca.push(data.productos[i])
                
            }
            
        }
        if (autosPorMarca.length>0) {
            return res.render('products',{
                lista:dataController.comentarios,
                auto: autosPorMarca[0],
                profile:data.usuario
                
            })
        }

    },
    
    productAdd: function(req,res){
        return res.render('product-add',{
            profile: data.usuario
        })
    },
    
}



module.exports= products
