const dataController = require('../db/db');

const profiles= {
    index: function (req,res){
        return res.render('profile')
    }, 
    edit: function (req,res) {
        return res.render('profile-edit')
    },
    
}
module.exports= profiles