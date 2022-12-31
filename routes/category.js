const express = require('express');

const TaskController = require('../controllers/task')

const router = express.Router();

router.get('/category/:category', TaskController.getSpecificTasks)

module.exports = router;