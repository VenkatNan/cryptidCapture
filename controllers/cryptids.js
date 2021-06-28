const express = require('express')
const Crypt = require('../models/Cryptid')
const router = express.Router()

router.get('/', (req,res)=>{
    Crypt.find({})
    .then((cryptids) => res.render('../views/index', {cryptids}))
})

router.post('/'),(req,res)=>{
    Crypt.create(req.body).then(cryptid => {
        Crypt.find({})
        .then(cryptids => {res.json(cryptids) })
    })
    .catch(error => console.error(error))
}

router.get('/newCryptid', (req, res) => {
    res.render('../views/newCryptid.ejs');
   });


router.get('/:id', (req,res)=>{
    Crypt.findById(req.params.id)
    .then((cryptid) => res.render('../views/show', {cryptid}))

})

router.get('/:id/edit', (req, res) => {
    Crypt.findById(req.params.id)
    .then((cryptid) => res.render('../views/edit.ejs', {cryptid}))

});

router.put('/:id', (req, res) =>{
    Crypt.findOneAndUpdate({_id:req.params.id},req.body,{new:true}) 
    .then((cryptid) => {
        res.render('../views/show', {cryptid})})
    .catch(error => console.error(error))
})

router.delete('/:id'), (req,res,next) => {
    Crypt.findByIdAndDelete({_id: req.params.id}, req.body)
    .then(cryptid => {
        Crypt.find({})
        .then(cryptids => {res.json(cryptids) })
    })
    .catch(error => console.error(error))
}

module.exports = router