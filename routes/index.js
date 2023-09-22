const express = require('express')
const router = express.Router()

const messages = [
    {
        text: "KENYYYYYY!!!",
        user: "Levi",
        added: new Date()
    },
    {
        text: "If you don't fight, you can't win!",
        user: "Eren Yeager",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.post('/new', (req, res) => {
    const isValid = true
    if (isValid) {
        messages.push({ text: req.body.message, user: req.body.name, added: new Date() })
        res.redirect('/')
    } else {
        console.log('Error')
        res.render('new', { user: req.body.name })
    }
})

module.exports = router