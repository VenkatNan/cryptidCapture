const Cryptid = require('../models/Cryptid')
// const User = require('../models/User');
const seedData = require('./seedData.json')


    // User.deleteMany({}))
    // .then(() => {
    //   return User.create({ email: 'fake@email.com', name: 'Fake Person' })
    //     .then((user) =>
    //       seedData.map((cryptid) => ({ ...cryptid, owner: user._id }))
    //     ).then((cryptids) => 


Cryptid.deleteMany({})
.then(() => Cryptid.insertMany(seedData))
    .catch(console.error)
    .finally(() => {
        process.exit()
})