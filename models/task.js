const Sequelize = require('sequelize')

const sequelize = require('../database/database')

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    task_todo: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    status: Sequelize.BOOLEAN
})

module.exports = Task