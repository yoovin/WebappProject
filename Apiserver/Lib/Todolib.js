// this is Library for Todoapp

const Todo = require('../Model/Todo')

exports.findTodo = (req, res, Todo) =>{
    Todo.find({id:req.query.id}, (err, todos) => {
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        }
        res.json(todos)
    })
}

exports.insertTodo = (req, res, Todo) =>{
    let id = req.body.id
    let content = req.body.content
    let todo = new Todo({
        id: id,
        content: content
    })

    todo.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log(`${id} insert content : ${content}`)
            res.json({result:1})
        }
    })
}

exports.updateTodo = (req, res, Todo) =>{
    Todo.findOne({id:req.body.id, _id:req.body._id}).exec((err, todo)=>{
        todo.content = req.body.content

        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.id}'s Todo updated to ${req.body.content}`)
                res.json({result:1})
            }
        })
    })
}

exports.deleteTodo = (req, res, Todo) => {
    Todo.findOne({id:req.body.id, _id:req.body._id}).exec((err, todo)=>{
        todo.isDeleted = true
        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.id}'s Todo ${req.body._id} is deleted`)
                res.json({result:1})
            }
        })
    })
}

exports.isDoneCheck = (req, res, Todo) => {
    Todo.findOne({id:req.body.id, _id:req.body._id}).exec((err, todo)=>{
        todo.isDone = req.body.isdone
        todo.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log(`${req.body.id}'s Todo ${req.body._id} is done ${req.body.isdone}`)
                res.json({result:1})
            }
        })
    })
}

