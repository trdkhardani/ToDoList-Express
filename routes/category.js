const express = require('express');

const CategoryController = require('../controllers/category')

const router = express.Router();

router.get('/category/:category', CategoryController.getSpecificTasks)

module.exports = router;