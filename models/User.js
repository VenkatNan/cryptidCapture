const mongoose = require('../dbs/connection');

const userSchema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    cryptids:[String],
    date: { type: Date, default: Date.now },

});
const User = mongoose.model('User', userSchema);
module.exports = User;