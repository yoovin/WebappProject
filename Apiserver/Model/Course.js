const mongoose = require('mongoose')

const courSchema = new mongoose.Schema({
    semester:{type:String, required:true},
    title:{type:String, required:true},
    grade:{type:String, required:true},
    link:{type:String, required:true},
    courseNum:{type:String, required:true}
})

module.exports = mongoose.model('course', courSchema)