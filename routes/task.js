const express = require('express');

const TaskController = require('../controllers/task')

const router = express.Router();

router.get('/', TaskController.getTasks)

module.exports = router;