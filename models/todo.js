const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Model = mongoose.model;

const todoSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

module.exports = Model('Todo', todoSchema);
