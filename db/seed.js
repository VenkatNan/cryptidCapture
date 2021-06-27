const Cryptid = require('../models/Cryptid')
const User = require('../models/User');
const seedData = require('./seedData.json')


Cryptid.deleteMany({})
    .then(() => User.deleteMany({}))
    .then(() => {
      return User.create({ email: 'fake@email.com', name: 'Fake Person' })
        .then((user) =>
          seedData.map((cryptid) => ({ ...cryptid, owner: user._id }))
        )
        .then((cryptids) => Cryptid.insertMany(seedData));
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })