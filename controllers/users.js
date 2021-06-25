const express = require('express')
const Crypt = require('../models/User')
const router = express.Router()

router.get('/users', (req,res)=>{
    res.send("hello")
})

module.exports = router