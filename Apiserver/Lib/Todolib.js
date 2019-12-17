// this is Library for Todoapp

exports.findTodo = (req, res, Todo)=>{
    Todo.find({user:req.query.user, isDeleted:false}, (err, todos) => {
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        }
        res.json(todos)
    }).sort({_id:-1})
}

exports.insertTodo = (req, res, Todo) =>{
    let user = req.body.user
    let content = req.body.content
    let todo = new Todo({
        user: user,
        content: content
    })

    todo.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log(`${user} insert content : ${content}`)
            res.json({result:1})
        }
    })
}

exports.updateTodo = (req, res, Todo) =>{
    Todo.findOne({user:req.body.user, _id:req.body._id}).exec((err, todo)=>{
        todo.content = req.body.content

        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.user}'s Todo updated to ${req.body.content}`)
                res.json({result:1})
            }
        })
    })
}

exports.deleteTodo = (req, res, Todo) =>{
    Todo.findOne({user:req.body.user, _id:req.body._id}).exec((err, todo)=>{
        todo.isDeleted = true
        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.user}'s Todo ${req.body._id} is deleted`)
                res.json({result:1})
            }
        })
    })
}

exports.isDoneCheck = (req, res, Todo) =>{
    Todo.findOne({user:req.body.user, _id:req.body._id}).exec((err, todo)=>{
        todo.isDone = req.body.isdone
        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.user}'s Todo ${req.body._id} is done ${req.body.isdone}`)
                res.json({result:1})
            }
        })
    })
}

