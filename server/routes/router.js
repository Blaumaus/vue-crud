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
    await record.save()

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
    await Record.findByIdAndRemove(req.params.id)
    res.json({ state: "deleted" })
})

module.exports = router