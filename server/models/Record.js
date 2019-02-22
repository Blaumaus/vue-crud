const mongoose = require('mongoose')
const { Schema } = mongoose

const Record = new Schema({
    name: String,
    email: String,
    address: String,
    gender: String
})

module.exports = mongoose.model('Record', Record)