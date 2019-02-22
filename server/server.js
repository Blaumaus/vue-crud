// Imports
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

// Database connection
mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true })
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.error(`[ERROR] ${err}`))

// Init express app
const app = express()

// Set up used utils
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/api/records', require('./routes/router'))
app.use('/', express.static(path.join(__dirname, '../dist')))

app.set('port', 3000)

// Start the server
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on port ${app.get('port')}`)
})