const mongoose = require('mongoose')

const pubSchema = new mongoose.Schema({
    sector:{type:String, required:true},
    desc:{type:String, required:true}
})

module.exports = mongoose.model('publication', pubSchema)