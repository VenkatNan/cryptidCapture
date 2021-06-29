const express = require('express')
const app = express();
const methodOverride = require('method-override');
app.set('view engine', 'ejs');
// const usersController = require('./controllers/users')
const cryptController = require('./controllers/cryptids')

app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/users', usersController);
app.use('/', cryptController);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("app is running on port 5000");
})
// app.listen(3000, () => console.log('app is running'))
// DO NOT REMOVE THIS LINE:
module.exports = app