const express = require('express');

const TaskController = require('../controllers/task')

const router = express.Router();

router.get('/', TaskController.getTasks)

router.get('/add-task', TaskController.getAddTask)

router.post('/add-task', TaskController.postAddTask)

router.post('/delete-task', TaskController.postDeleteTask)

module.exports = router;