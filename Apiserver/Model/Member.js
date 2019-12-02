const mongoose = require('mongoose')

const memSchema = new mongoose.Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true}
})

module.exports = mongoose.model('member', memSchema)