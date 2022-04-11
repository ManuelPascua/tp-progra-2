const products= {
    index: function (req,res){
        return res.render('products')
    },
    
    productAdd: function(req,res){
        return res.render('product-add')
    },
    productEdit: function(req,res){
        return res.render('product-edit')
    },
}
module.exports= products
