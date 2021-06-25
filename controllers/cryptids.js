const express = require('express')
const Crypt = require('../models/Cryptid')
const router = express.Router()

router.get('/', (req,res)=>{
    Crypt.find({})
    .then((cryptids) => res.render('../views/index.ejs', {cryptids}))
})

module.exports = router