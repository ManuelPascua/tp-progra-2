


const main={
    index: function(req,res){
        return res.render('index')
    },
    register: function(req,res){
        return res.render('register')
    },
    login: function(req,res){
        return res.render('login')
    },
    

}

module.exports=main