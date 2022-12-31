const Task = require('../models/task')

exports.getTasks = (req, res, next) => {
    Task.findAll()
    .then(tasks => {
        res.render('task/tasks-list', 
        {
        tasks: tasks,
        docTitle: 'All Tasks',
        path: '/task'
        })
    })
    .catch(err => {
        console.log(err)
    })
}