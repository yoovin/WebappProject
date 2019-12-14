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
const User = require('./Model/User')

// Librarys
const Serverlib = require('./Lib/Serverlib')
const Todolib = require('./Lib/Todolib')
const Loginlib = require('./Lib/Loginlib')

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

app.post('/post/enterCourse', (req, res) => {

})


// Todo side
app.get('/api/findTodo', cors(), (req, res)=>{
    Todolib.findTodo(req, res, Todo)
})

app.post('/post/insertTodo', cors(), (req, res)=>{
    Todolib.insertTodo(req, res, Todo)
})

app.post('/post/updateTodo', (req, res)=>{
    Todolib.updateTodo(req, res, Todo)
})

app.post('/post/deleteTodo', (req, res)=>{
    Todolib.deleteTodo(req, res, Todo)
})

app.post('/post/isDoneCheck', (req, res)=>{
    Todolib.isDoneCheck(req, res, Todo)
})

// Login side

app.post('/post/registerUser', (req, res)=>{
    Loginlib.registerUser(req, res, User)
})

app.post('/post/login', (req, res) =>{
    Loginlib.login(req, res, User)
})


app.listen(port, console.log(`Backend server running at ${port} port`))