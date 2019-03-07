// Imports
const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const Record = require('../models/Record')
require('dotenv').config()

router.get('/', async (req, res) => {
    res.json(await Record.find())
})

router.get(':id', async (req, res) => {
    res.json(await Record.findById(req.params.id))
})

router.post('/', async (req, res) => {
    const record = new Record(req.body)

    async function getNextId () {
        let db = await Record.find()
        let el = db[db.length - 1]
        if (db.length === 0) return 1
        return Number(el._id) + 1
    }

    record._id = await getNextId()

    try {
        await record.save()
    } catch (err) {
        console.log(`[ERROR] ${err}`)
    }
    
    const output = `
    <p>You have a new message from vue-study</p>
    <ul>
        <li>name: ${req.body.name}</li>
        <li>email: ${req.body.email}</li>
        <li>address: ${req.body.address}</li>
        <li>gender: ${req.body.gender}</li>
    </ul>
    `

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: 'vue app',
        to: 'margareq@protonmail.ch',
        subject: 'new user blablabla',
        text: req.body.name,
        html: output
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(`[ERROR] ${err}`)

        console.log(`Message sent: ${info.messageId}`)
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)

    })

    res.json({ state: "success" })
})

router.put('/:id', async (req, res) => {
    await Record.findByIdAndUpdate(req.params.id, req.body)
    res.json({ state: "updated" })
})

router.delete('/:id', async (req, res) => {
    await Record.findOneAndRemove({ _id: req.params.id }, (err, doc) => {
        if (err || !doc) res.json({ state: "notexist" })
        else res.json({ state: "deleted" })
    })
})

module.exports = router