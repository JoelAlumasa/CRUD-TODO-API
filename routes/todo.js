const router = require('express').Router();
const todocontr = require('../controllers/controllers')

// Get all tasks
router.get('/', todocontr.allTasks);

// Get a specific task
router.get('/:id', todocontr.oneTask);

// Create a task
router.post('/create', todocontr.create);

// Edit a task
router.put('/:id', todocontr.editTask);

// Delete a task
router.delete('/:id', todocontr.deleteTask);


module.exports = router;
