const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo