


const main={
    index: function(req,res){
        return res.render('index')
    },
    profile: function(req,res){
        return res.render('profile')
    },
    register: function(req,res){
        return res.render('register')
    },
    products: function(req,res){
        return res.render('products')
    },

}

module.exports=main