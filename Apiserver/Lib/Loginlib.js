

// post

exports.registerUser = (req, res, User) =>{
    let user = new User({
        name: req.body.name,
        id: req.body.id,
        pw: req.body.pw,
        email: req.body.email,
        stNum: req.body.stNum
    })

    user.save(err=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("new user registed!")
            res.json({result:1})
        }
    })
}

exports.login = (req, res, User) =>{
    let id = req.body.id
    let pw = req.body.pw

    User.findOne({id:id},(err, data)=>{
        if(data){
            console.log(data)
            if(data.pw === pw){
                res.json({
                    "name":data.name,
                    "stNum":data.stNum,
                    "result":"success"
                })
            } else {
                res.json({result:"password error"})
            }
        }else{
            res.json({result:"id error"})
        }
        
        if(err){
            console.error(err)
            res.json({result:err})
        }
    })
}