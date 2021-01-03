const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
router.post('/add-task',homeController.addTask);
// Could add functionality for displaying each task on a new page.

module.exports = router;

