const mongoose = require('mongoose')
const { Schema } = mongoose

const Record = new Schema({
    _id: String,
    name: String,
    email: String,
    address: String,
    gender: String
})

module.exports = mongoose.model('Record', Record)