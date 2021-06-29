const mongoose = require('../db/connection');

const cryptSchema = new mongoose.Schema({
    name: {type:String},
    description: String,
    location: {type:String},
    img: String,
    confirmed: Boolean,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

const Cryptid = mongoose.model('Cryptid', cryptSchema);
module.exports = Cryptid;