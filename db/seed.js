const Cryptid = require('../models/Cryptid')
const seedData = require('./seedData.json')

Cryptid.deleteMany({})
    .then(()=> {
        return Cryptid.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })