const Task = require('../models/task')

exports.getSpecificTasks = (req, res, next) => {
    const category = req.params.category;
    Task //SELECT * FROM tasks WHERE category = category
    .findAll({ where: { category: category } }) 
    .then(tasks => { 
        res.render('category/by-category',
        {
            tasks: tasks,   
            docTitle: category,
            path: '/category',
        })
    })
    .catch(err => console.log(err));
}