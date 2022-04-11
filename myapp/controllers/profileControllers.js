const { usuario } = require('../db/db');
const dataController = require('../db/db');

const profiles= {
    index: function (req,res){
        return res.render('profile',{
            lista: dataController.productos,
            profile: dataController.usuario
        })
    }, 
    edit: function (req,res) {
        return res.render('profile-edit')
    },
    
}
module.exports= profiles