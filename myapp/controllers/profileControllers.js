
const dataController = require('../db/db');

const profiles= {
    index: function (req,res){
        return res.render('profile',{
            lista: dataController.productos,
            profile: dataController.usuario
        })
    }, 
    edit: function (req,res) {
        return res.render('profile-edit',{
            profile: dataController.usuario
        })
    },
    
}
module.exports= profiles