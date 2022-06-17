const db= require('../database/models')

const profiles= {
    index: function (req,res){
        db.User. findone()





        // return res.render('profile',{
        //     lista: db.Porducts,
        //     profile: db.User
        // })
    }, 
    edit: function (req,res) {
        return res.render('profile-edit',{
            profile: db.User
        })
    },
    
}
module.exports= profiles