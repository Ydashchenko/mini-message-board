const express = require('express')
const router = express.Router()

const messages = [
    {
        text: "KENYYYYYY!!!",
        user: "Levi",
        added: new Date()
    },
    {
        text: "ZA WARUDOOO",
        user: "DIO",
        added: new Date()
    },
    {
        text: "still REVERBEVATE",
        user: "Ronnie Radke",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.post('/new', (req, res) => {
    const message = req.body.message
    const name = req.body.name
    const isValid = true

    if (isValid) {
        messages.push({ text: message, user: name, added: new Date() })
        res.redirect('/')
    } else {
        console.log('Error')
        res.render('form', { user: req.body.name })
    }
})

module.exports = router