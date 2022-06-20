const db= require('../database/models')
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const register = {
    index: (req, res) => {
        if (!req.session.usuario) {
            res.render('register', {
                error: null
            })
        } else {
            res.redirect('/')
        }
    },

    createUser: (req, res) => {
        console.log(req.body)
        if (req.body.nombre && req.body.apellido && req.body.usuario && req.body.email && req.body.fecha  && req.body.contrasenia) {
            if (req.body.contrasenia.length >= 4) {
                if (req.body.contrasenia == req.body.confirContra) {
                    if (req.file) {
                        let passEncriptada = bcrypt.hashSync(req.body.contrasenia);
                        db.User.findOne({
                                where: {
                                    usuario: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        lastname: req.body.apellido, 
                                        email: req.body.email,
                                        date_of_birth: req.body.fecha,
                                        username: req.body.usuario,
                                        foto_perfil: req.file.filename,
                                        password: passEncriptada,
                                    }).then(user => {
                                        req.session.usuario = user

                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        return res.render('/profile',{profile:req.session.usuario});
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })

                    } else {

                        let passEncriptada = bcrypt.hashSync(req.body.contrasenia);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        lastname: req.body.apellido, 
                                        email: req.body.email,
                                        date_of_birth: req.body.fecha,
                                        username: req.body.usuario,
                                        foto_perfil: 'fotodefault.jpeg',
                                        password: passEncriptada,
                                    }).then(user => {
                                        req.session.usuario = user
                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })
                    }
                } else {
                    res.render('register', {
                        error: 'Las contraseñas no coinciden'
                    })
                }
            } else {
                res.render('register', {
                    error: 'La contraseña tiene que tener mas de tres caracteres'
                })
            }
        } else { //va al primer if, si falta algun campo tira este error. en el front esta el required
            res.render('register', {
                error: 'No puede haber campos vacios'
            })
        }
    }

}

module.exports=register
