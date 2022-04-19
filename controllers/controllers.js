const Todo = require('../models/todo');

// List all tasks
exports.allTasks = async (req, res) => {
    console.log('listing')
    Todo.find().exec((err,tasks) =>{
        if(err){
            return res.json({error: err});
        }
        return res.status(200), res.json({data: tasks});
    });
};

// Show a specific task
exports.oneTask = async (req, res) => {
    Todo.findById(req.params.id).exec((err,task) =>{
        if(err){
            return res.status(404),res.json({error: "The task id couldn't be found"});
        }
        return res.status(200), res.json({data: task});
    });
}

// Create a task
exports.create = async (req, res) => {
    const task = Todo({
        title: req.body.title,
        content: req.body.content
    });
    task.save((err, task) =>{
        if(err){
            return res.json({error: err});
        }
        return res.status(201),res.json({data: task});
    })
};

// Edit a task
exports.editTask = async (req, res) => {
    Todo.findById(req.params.id)
        .exec((err, task) => {
            if(err){
                return res.json({error: "The task id wasn't found"});
            }
            task.title = req.body.title;
            task.content = req.body.content;
            task.completed = req.body.completed;
            task.save((err, task) =>{
                if(err){
                    return res.json({error: err});
                }
                return res.status(200), res.json({data: task});
            })
        })
};

// Delete a task
exports.deleteTask = async (req, res) => {
    Todo.deleteOne({
        _id: req.params.id
    }).exec((err, result) => {
        if(err){
            return res.json({error: err});
        }
        if (result.deletedCount == 0){
            return res.status(404), res.json({data: 'The task id specified does not exist'});
        }
        return res.json({data: "Task Deleted"});
    })
};
