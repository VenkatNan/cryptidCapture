const mongoose = require('../db/connection');

const cryptSchema = new mongoose.Schema({
    name: String,
    description: String,
    location:String,
    img: String,
    confirmed: Boolean,
});

const Cryptid = mongoose.model('Cryptid', cryptSchema);
module.exports = Cryptid;