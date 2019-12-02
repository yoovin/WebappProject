const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    user:{type:String, required:true},
    content:{type:String, required:true},
    isDone:{type:Boolean, required:true, default:false},
    isDeleted:{type:Boolean, required:true, default:false}
})

module.exports = mongoose.model('todo', todoSchema)