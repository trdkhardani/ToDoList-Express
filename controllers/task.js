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
    res.render('task/add-task', 
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
        category: category,
        status: false
    })
    .then(result => {
        console.log(result)
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getEditTask = (req, res, next) => {
    const taskId = req.params.taskId;
    req.user
    .getTasks({where: {id: taskId}})
    .then(tasks => {
        const task = tasks[0];
        if(!task){
            return res.redirect('/');
        }
        res.render('task/edit-task', 
        {
            docTitle: 'Edit Task: ' + task.task_todo,
            path: '/edit-task',
            task: task
        })
    })
    .catch(err => {
        console.log(err)
    })
}

exports.postEditTask = (req, res,next) => {
    const taskId = req.body.taskId;
    const editedTask = req.body.task;
    const editedCategory = req.body.category;
    Task.findByPk(taskId)
    .then(task => {
        task.task_todo = editedTask;
        task.category = editedCategory;
        return task.save()
    })
    .then(result => {
        console.log(result)
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.checkTask = (req, res, next) => {
    const taskId = req.body.taskId;
    Task.findByPk(taskId)
    .then(task => {
        task.status = !task.status;
        return task.save()
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