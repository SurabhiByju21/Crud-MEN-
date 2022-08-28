const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens) //To send it to client
    } catch (error) {
       res.send('Error' + error) 
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({           //Creating an object
        name: req.body.name,            //For sending post request
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }

})

module.exports = router