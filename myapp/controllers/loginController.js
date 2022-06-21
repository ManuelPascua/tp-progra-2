const db = require('../Database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const login= {
    index: (req, res) => {
        if (!req.session.email) {
            res.render('login', {
                error: null,
                logueado:false
            })
        } else {
            res.redirect('/')
        }
    },
    //session dice si estas logueado o no. Pasa info por todas las vistas. Agregamos paquete express session 
    login: (req, res) => {
        if (req.body.email && req.body.password) {
            db.User.findOne({
                //promesa se cumple, puede devolver null o el email 
                    where: [{
                        email: req.body.email
                    }]
                })
                .then(usuario => {   
                    if (usuario) {
                        //si escribio bien el nombre de email
                        if (bcrypt.compareSync(req.body.password, usuario.password)) {
                            req.session.usuario = usuario
                            if (req.body.remember) { //body es por POST
                                res.cookie('userId', usuario.id, { //crea la cookie. nombre cookie, que tiene guardado adentro (no info sensible)
                                    maxAge: 1000 * 60 * 5
                                });
                            }
                            return res.redirect('/')
                        } else {
                            return res.render('login', {
                                error: 'La contraseña es incorrecta'
                            })
                        }

                    } else {
                        return res.render('login', {
                            error: 'El email ingresado es incorrecto'
                        })
                    }
                })
        } else {
            return res.render('login', {
                error: 'Ningun campo puede estar vacio'
            })
        }


        ;
    },
}

module.exports=login