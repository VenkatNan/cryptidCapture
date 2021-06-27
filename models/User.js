const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
    name: {type:String, require:true},
    email: {type:String, require:true},
    date: { type: Date, default: Date.now },

});
const User = mongoose.model('User', userSchema);
module.exports = User;