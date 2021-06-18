
const express = require('express')
const app = express();
// const usersController = require('./controllers/users')
// const notesController = require('./controllers/notes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/users', usersController);
// app.use('/', notesController);

app.listen(3000, () => console.log('app is running'))
// DO NOT REMOVE THIS LINE:
module.exports = app