const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: String,
    Status:{
        type: Boolean,
        default: false
    },
    dueDate: Date
});

module.exports = mongoose.model('Todo', todoSchema);
