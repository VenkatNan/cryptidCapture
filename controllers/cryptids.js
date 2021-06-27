const express = require('express')
const Crypt = require('../models/Cryptid')
const router = express.Router()

router.get('/', (req,res)=>{
    Crypt.find({})
    .then((cryptids) => res.render('../views/index', {cryptids}))
})

router.post('/'),(req,res,next)=>{
    Crypt.create(req.body).then(cryptid => {
        res.json(cryptid)
    })
    .catch(next); 
}

router.get('/newCryptid', (req, res) => {
    res.render('../views/newCryptid.ejs');
   });

router.get('/edit', (req, res) => {
    res.render('../views/edit');
   });

router.get('/:id', (req,res,next)=>{
    Crypt.findById(req.params.id)
    .then((cryptid) => res.render('../views/show', {cryptid}))
    .catch(next); 
})
router.delete('/:id'), (req,res,next) => {
    Crypt.findByIdAndDelete(req.params.id)

}


 

module.exports = router