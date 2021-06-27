const express = require('express')
const Crypt = require('../models/User')
const router = express.Router()

router.get('/users', (req,res)=>{
    res.send("hello")
})

router.post("/users", (req, res, next) => {
    User.create(req.body)
      .then(user => {
        res.json(user);
      })
      .catch(next)
  });

module.exports = router