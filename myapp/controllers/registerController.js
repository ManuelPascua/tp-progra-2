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
        if (req.body.nombre && req.body.apellido && req.body.email && req.body.fecha && req.body.usuario && req.body.contraseña) {
            if (req.body.contraseña.length >= 4) {
                if (req.body.contraseña == req.body.confirContra) {
                    if (req.file) {
                        let passEncriptada = bcrypt.hashSync(req.body.contraseña);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        last_name: req.body.apellido,  //body es por POST - nombreInput
                                        email: req.body.email,
                                        nacimiento: req.body.fecha,
                                        username: req.body.usuario,
                                        cover: req.file.filename,
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

                    } else {

                        let passEncriptada = bcrypt.hashSync(req.body.contraseña);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        last_name: req.body.apellido,
                                        email: req.body.email,
                                        nacimiento: req.body.fecha,
                                        username: req.body.usuario,
                                        cover: 'fotodefault.jpeg',
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

