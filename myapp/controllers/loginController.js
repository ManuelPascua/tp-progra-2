const db = require('../Database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const login= {
    index: (req, res) => {
        if (!req.session.usuario) {
            res.render('login', {
                error: null
            })
        } else {
            res.redirect('/')
        }
    },
    //session dice si estas logueado o no. Pasa info por todas las vistas. Agregamos paquete express session 
    login: (req, res) => {
        if (req.body.usuario && req.body.contrasena) {
            db.User.findOne({
                //promesa se cumple, puede devolver null o el usuario 
                    where: [{
                        username: req.body.usuario
                    }]
                })
                .then(usuario => {   
                    if (usuario) {
                        //si escribio bien el nombre de usuario
                        if (bcrypt.compareSync(req.body.contrasena, usuario.password)) {
                            req.session.usuario = usuario
                            if (req.body.remember) { //body es por POST
                                res.cookie('userId', usuario.id, { //crea la cookie. nombre cookie, que tiene guardado adentro (no info sensible)
                                    maxAge: 1000 * 60 * 5
                                });
                            }
                            res.redirect('/')
                        } else {
                            res.render('login', {
                                error: 'La contraseña es incorrecta'
                            })
                        }

                    } else {
                        res.render('login', {
                            error: 'El nombre de usuario es incorrecto'
                        })
                    }
                })
        } else {
            res.render('login', {
                error: 'Ningun campo puede estar vacio'
            })
        }


        ;
    },
}

module.exports=login