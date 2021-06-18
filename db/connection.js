const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/cryptids'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

.catch((error) => console.log('Connection Failed!', error));

module.exports = mongoose