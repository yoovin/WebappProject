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

var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/webtest")

// app.use
app.use(bodyParser.json())

// app.get
app.get('/', cors() , (req, res)=>{
    res.send("Hello world!")
})

app.get('/getMember', cors(), (req, res)=>{
    Member.find((err, data)=>{
        if(err) return res.status(500).send({error:'database failure'})
        res.json(data)
    })
})

// app.post
app.post('/addMember', cors(), (req, res)=>{
    let member = new Member({
        name: req.body.name,
        desc: req.body.desc
    })

    member.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Database added!")
            res.json({result:1})
        }
    })
})

// app.post('/addCourse', cors(), (req, res)=> {
//     let course = new Course({

//     })
// })

app.post('/addPublication', cors(), (req, res)=> {
    let publication = new Publication({
        sector: req.body.sector,
        desc: req.body.desc
    })

    publication.save((err)=>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Database added!")
            res.json({result:1})
        }
    })
})



app.listen(port, console.log(`Backend server running at ${port} port`))