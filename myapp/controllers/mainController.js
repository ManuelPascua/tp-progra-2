


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
    login: function(req,res){
        return res.render('login')
    },
    productAdd: function(req,res){
        return res.render('product-add')
    },
    productEdit: function(req,res){
        return res.render('product-edit')
    },

}

module.exports=main