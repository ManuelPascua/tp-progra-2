const db = require('../database/models');
const Op = db.Sequelize.Op;

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
                        User:User,
                        producto:producto,
                        lista:Comment
                    })     
 
                })
            })
        })  

    },
    
    productAdd: function(req,res) {
        if (req.session.usuario) {
            return res.render('product-add')
        } else {
            return res.redirect('/')
        }
    },

    create: (req, res) => {
        if (req.session.usuario) {
            db.Product.create({
                    model: req.body.model,
                    marca: req.body.marca,
                    year: req.body.year,
                    price: req.body.price,
                    foto: req.body.imagen,
                    user_id: req.session.usuario.id
                })
                .then(producto => {
                    res.redirect("/products/id/" + producto.id)
                })
        } else {
            return res.render('product-add', {
                error: 'No se pueden dejar campos vacíos'
            })
        }
    },
    edit: (req, res) => {
        if (req.session.usuario) {
            db.Product.findByPk(req.params.id).then(data => {
                if (req.session.usuario.id == data.users_id) {
                    res.render('product-edit', {
                        producto: data
                    })
                } else {
                    res.redirect('/')
                }
            })
        } else {
            res.redirect('/')
        }

    },

    update: (req, res) => {
        if (req.body.portada) {
            db.Product.update({
                    model: req.body.model,
                    marca: req.body.marca,
                    year: req.body.year,
                    price: req.body.price,
                    foto: req.body.imagen,
                    user_id: req.session.usuario.id
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(producto => {
                    res.redirect("/product/id/" + req.body.id)
                })
        } else {
            db.Product.update({
                    model: req.body.model,
                    marca: req.body.marca,
                    year: req.body.year,
                    price: req.body.price,
                    foto: req.body.imagen,
                    user_id: req.session.usuario.id
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(producto => {
                    res.redirect("/product/id/" + req.body.id)
                })
        }

    },

    delete: (req, res) => {
        if (!req.session.usuario || req.session.usuario.id != req.body.usuario_id) {
            return res.redirect('/')
        }
        let idProducto = req.params.id
        db.Comment.destroy({
            where: {
                product_id: idProducto
            }
        }).then(() => {
            db.Product.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => {
                return res.redirect('/')
            })
        })
        
    },

    comment: (req, res) => {
        if (req.session.usuario) {
            console.log(req.body)
            
            db.Comment.create({
                comment: req.body.comment,
                product_id: req.body.id,
                user_id: req.session.usuario.id
            }).then(resultado => {
                return res.redirect('/products/id/' + req.body.id)
            })
        } else 
            return res.redirect('/login')
        }
}
 



module.exports= products
