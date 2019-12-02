// Backend server
const app = require('express')()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

// Models
const Course = require('./Model/Course')
const Member = require('./Model/Member')
const Publication = require('./Model/Publication')
const Notice = require('./Model/Notice')
const Todo = require('./Model/Todo')

// Libs
const Serverlib = require('./Lib/Serverlib')
const Todolib = require('./Lib/Todolib')

var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/webtest")

// app.use
app.use(bodyParser.json())

// app.get
app.get('/api/getMember', cors(), (req, res)=>{
    Serverlib.getMember(req, res, Member)
})

// Publication 
app.get('/api/getPublication', cors(), (req, res)=>{
    Serverlib.getPublication(req, res, Publication)
})

// Notice
app.get('/api/getNotice', cors(), (req, res)=>{
    Serverlib.getNotice(req, res, Notice)
})

// app.post
app.post('/post/addMember', cors(), (req, res)=>{
    Serverlib.addMember(req, res, Member)
})

// app.post('/addCourse', cors(), (req, res)=> {
//     let course = new Course({

//     })
// })

app.post('/post/addPublication', cors(), (req, res)=> {
    Serverlib.addPublication(req, res, Publication)
})

app.post('/post/addNotice', cors(), (req, res)=>{
    Serverlib.addNotice(req, res, Notice)
})


// Todo side
app.get('/api/getTodo', (req, res)=>{
    Todolib.findTodo(req, res, Todo)
})

app.post('/post/insertTodo', (req, res)=>{
    Todolib.insertTodo(req, res, Todo)
})

app.post('/post/updateTodo', (req, res)=>{
    Todolib.updateTodo(req, res, Todo)
})

app.post('/post/deleteTodo', (req, res)=>{
    Todolib.deleteTodo(req, res, Todo)
})

app.post('/post/isDoneCheck', (req, res, Todo)=>{
    Todolib.isDoneCheck(req, res, Todo)
})



app.listen(port, console.log(`Backend server running at ${port} port`))