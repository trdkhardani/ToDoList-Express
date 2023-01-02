const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '', //db_name, username, password,
{
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;