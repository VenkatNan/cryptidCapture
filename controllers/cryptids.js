const express = require('express')
const Crypt = require('../models/Cryptid')
const router = express.Router()

router.get('/', (req,res)=>{
    Crypt.find({})
    .then((cryptids) => res.render('../views/index', {cryptids}))
})

router.post('/',(req,res)=>{
    console.log(req.body);
    Crypt.create({_id:req.body.id},req.body,{new:true})
        .then(cryptids => {res.json(cryptids) })
        .then(res.redirect('/'))
        .catch(error => console.error(error))
})

router.get('/newCryptid', (req, res) => {
    res.render('../views/newCryptid.ejs');
   });

   router.put('/:id', (req, res) =>{
    Crypt.findOneAndUpdate({_id:req.params.id},req.body,{new:true}) 
    .then((cryptid) => {
        res.render('../views/show', {cryptid})})
    .catch(error => console.error(error))
})

router.get('/:id', (req,res)=>{
    Crypt.findById(req.params.id)
    .then((cryptid) => res.render('../views/show', {cryptid}))

})

router.get('/:id/edit', (req, res) => {
    Crypt.findById(req.params.id)
    .then((cryptid) => res.render('../views/edit.ejs', {cryptid}))

});

router.delete('/:id', (req,res,error) => {
    Crypt.findByIdAndRemove({_id: req.params.id})
    res.redirect('/')

})

module.exports = router