const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    id:{type:String, required:true, unique:true},
    pw:{type:String, required:true},
    email:{type:String, required:true},
    stNum:{type:Number, required:true, unique:true},
    course:[{type:Number}]
})

module.exports = mongoose.model('user', userSchema)