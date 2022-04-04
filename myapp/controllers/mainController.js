


const bienvenida={
    index: function(req,res){
        return res.render('index')
    },
    profile: function(req,res){
        return res.render('profile')
    },
}

module.exports=bienvenida