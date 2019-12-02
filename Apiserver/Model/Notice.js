const mongoose = require('mongoose')

const notiSchema = new mongoose.Schema({
    title:{type:String, required:true},
    desc:{type:String, required:true}
})

module.exports = mongoose.model('notice', notiSchema)