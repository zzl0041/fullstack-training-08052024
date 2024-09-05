const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res)=>{
    try{
        const todos = await Todo.find();
        res.render('index', {todos});
    }catch(err){
        res.status(500).send(err);
    }
});

router.get('/todos/new', (req, res)=>{
    res.render('create');
});

router.post('/todos', async (req, res)=>{
    const {title, description, dueDate} = req.body;
    const newTodo = new Todo({title, description, dueDate});
    try{
        await newTodo.save();
        res.redirect('/');
    }catch (err){
        res.status(500).send(err);
    }
});

router.get('/todos/:id/edit', async(req, res)=>{
    try{
        const todo = await Todo.findById(req.params.id);
        res.render('edit', {todo});
    }catch(err){
        res.status(500).send(err);
    }
});

router.post('/todos/:id', async(req, res)=>{
    try{
        const{title, description, status, dueDate} = req.body;
        await Todo.findByIdAndUpdate(req.params.id, {title, description, status: !!status, dueDate});
        res.redirect('/');
    }catch(err){
        res.status(500).send(err);
    }
});

router.post('/todos/:id/delete', async(req, res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;