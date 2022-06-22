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
                    },
                    {
                        association: 'usuario'
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
        db.User.findByPk(req.params.id).then(resultado => {
            res.render('profile-edit', {
                usuario: resultado
            })
        })

    },
    update: (req, res) => {
        if (req.body.password) {
            let passEncriptada = bcrypt.hashSync(req.body.password);
            db.User.update({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                date_of_birth: req.body.date_of_birth,
                username: req.body.username,
                password: passEncriptada
            }, {
                where: {
                    id: req.params.id
                }
            }).then(resultado => {
                //res.send(req.session.usuario)
                return res.redirect('/profiles/' + req.params.id)
            })
        } else {
            db.User.update({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                date_of_birth: req.body.date_of_birth,
                username: req.body.username,
            }, {
                where: {
                    id: req.params.id
                }
            }).then(resultado => {
                //res.send(resultado)
               return res.redirect('/profiles/' + req.params.id)
            })
        }
    }
}
module.exports = profiles;
