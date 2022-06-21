const db= require('../database/models')
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const register = {
    index: (req, res) => {
        if (!req.session.usuario) {
            return res.render('register', {
                error: null
            })
        } else {
            return res.redirect('/')
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
                                        email: req.body.email
                                    }
                                })
                                .then(resultado => {
                                    console.log('resulado',resultado)
                                    if (resultado ==null)  {
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
                                        return res.render('register', {
                                            error: 'El email ya se encuentra registrado'
                                        })
                                    }
                                })

                        } else {

                            let passEncriptada = bcrypt.hashSync(req.body.contrasenia);
                            db.User.findOne({
                                    where: {
                                        email: req.body.email
                                    }
                                })
                                .then(resultado => {
                                    if (resultado ==null) {
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

                                            return res.redirect('/');
                                        });
                                    } else {
                                        return res.render('register', {
                                            error: 'Ya esta registrado el email'
                                        })
                                    }
                                })
                        }
                    } else {
                        return res.render('register', {
                            error: 'Las contraseñas no coinciden'
                        })
                    }
                    
                } else { 
                   return res.render('register', {
                        error: 'La contraseña tiene que tener mas de tres caracteres'
                    })
                }
            
        } else { //va al primer if, si falta algun campo tira este error. en el front esta el required
            return res.render('register', {
                error: 'No puede haber campos vacios'
            })
        }
        
    }

}

module.exports=register
