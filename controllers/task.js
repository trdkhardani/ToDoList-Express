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

exports.getAddTask = (req, res, next) => {
    res.render('task/add-edit-task', 
    {
        docTitle: 'Add Task',
        path: '/task'
    })
}

exports.postAddTask = (req, res, next) => {
    console.log(req.body);
    const task = req.body.task;
    const category = req.body.category;
    req.user
    .createTask({
        task_todo: task,
        category: category
    })
    .then(result => {
        console.log(result)
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.postDeleteTask = (req, res, next) => {
    const taskId = req.body.taskId;
    Task.findByPk(taskId)
    .then(task => {
        return task.destroy()
    })
    .then(result => {
        console.log(result);
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}