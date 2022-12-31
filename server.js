const express = require('express');

const bodyParser = require('body-parser');

const taskRouter = require('./routes/task');

const categoryRouter = require('./routes/category');

const app = express()

const port = 3000

const sequelize = require('./database/database');
const Task = require('./models/task')
const User = require('./models/user')

app.set('view engine', 'ejs'); //set inisialisasi+import ejs templating engine
app.set('views', 'views') //set letak file .ejs

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => { //for magic association method
    User.findByPk(1)
    .then(user => {
        req.user = user
        next()
    })
    .catch(err => {
        console.log(err)
    })
})

app.use(taskRouter);

app.use(categoryRouter);

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
    app.listen(port); 
})
.catch(err => {
    console.log(err)
})