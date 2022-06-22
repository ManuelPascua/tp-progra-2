const db= require('../database/models')
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const profiles = {
    index: (req, res) => {
        db.User.findByPk(req.params.id, {
            include: [{
                    association: 'productos',
                    include: [{
                        association: 'comentarios'
                    }]
                },
                {
                    association: 'comentarios'
                }
            ]
        }).then(usuario => {
            if(usuario){
                if(req.session.usuario && req.session.usuario.id == usuario.id){
                    req.session.usuario = usuario //updatea la session
                }
                res.render('profile', {
                    profile: usuario,
                    lista: usuario.productos,
                    comentarios: usuario.comentarios
                })
            }
        })
        /*db.Product.findAll({
            include: [{
                association: 'usuario'
            }, {
                association: 'comentarios'
            }],
        }).then(producto => {
            res.render('profile', {
                producto: producto
            });
        })*/

    },
    edit: (req, res) => {
        db.usuario.findByPk(req.params.id).then(resultado => {
            res.render('profile-edit', {
                usuario: resultado
            })
        })

    },
    update: (req, res) => {
        if (req.body.password) {
            let passEncriptada = bcrypt.hashSync(req.body.password);
            db.User.update({
                name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                nacimiento: req.body.fecha,
                username: req.body.usuario,
                password: passEncriptada
            }, {
                where: {
                    id: req.body.id
                }
            }).then(resultado => {
                //res.send(req.session.usuario)
                res.redirect('/profile/id/' + req.body.id)
            })
        } else {
            db.User.update({
                name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                nacimiento: req.body.fecha,
                username: req.body.user,
            }, {
                where: {
                    id: req.body.id
                }
            }).then(resultado => {
                //res.send(resultado)
               res.redirect('/profile/id/' + req.body.id)
            })
        }
    }
}
module.exports = profiles;
