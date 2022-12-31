const express = require('express');

const app = express()

const bodyParser = require('body-parser');

const taskRouter = require('./routes/task');

app.set('view engine', 'ejs'); //set inisialisasi+import ejs templating engine
app.set('views', 'views') //set letak file .ejs

app.use(bodyParser.urlencoded({extended: true}));

const sequelize = require('./database/database');
const Task = require('./models/task')
const User = require('./models/user')

const port = 3000

app.use(taskRouter)

Task.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
})
User.hasMany(Task)

//migrate
sequelize 
// .sync({force: true})
.sync()
.then(result => {
    return User.findByPk(1)
    // console.log(result);
})
.then(user => {
    if(!user){ //seeder
        User.create({ 
            name: 'Tridiktya',
            email: 'thp@email.com'
        })
    }
    return user
})
.then(cart => {
    app.listen(port); //method listen() berfungsi untuk membuat server berjalan (start server)
})
.catch(err => {
    console.log(err)
}) //catatan jelasnya: video 162 menit 5:09