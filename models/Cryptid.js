const mongoose = require('../db/connection');

const cryptSchema = new mongoose.Schema({
    name: {type:String, default:"the invisible dino"},
    description: {type:String, default:"I's a dino that we can hear, smell and feel, but cannot see"},
    location:String,
    img: {type:String, default:"https://cdn.dribbble.com/users/164119/screenshots/11264632/media/bd9946e7b92046e775b8457e744dd89c.jpg?compress=1&resize=400x300"},
    confirmed: Boolean,
});

const Cryptid = mongoose.model('Cryptid', cryptSchema);
module.exports = Cryptid;