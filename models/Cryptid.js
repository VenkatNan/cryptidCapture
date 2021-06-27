const mongoose = require('../db/connection');

const cryptSchema = new mongoose.Schema({
    name: {type:String, require:true},
    description: String,
    location: {type:String, require:true},
    img: String,
    confirmed: Boolean,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

const Cryptid = mongoose.model('Cryptid', cryptSchema);
module.exports = Cryptid;