const mongoose = require('mongoose')

const pubSchema = new mongoose.Schema({
    trans:{type:String, required:true},
    sector:{type:String, required:true},
    desc:{type:String, required:true},
    url:{type:String, required:true}
})

module.exports = mongoose.model('publication', pubSchema)