const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '', //nama_table, username, password,
{
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;