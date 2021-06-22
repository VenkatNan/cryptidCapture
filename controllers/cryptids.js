const express = require('express')
const Crypt = require('../models/Cryptid')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("hello")
})

module.exports = router