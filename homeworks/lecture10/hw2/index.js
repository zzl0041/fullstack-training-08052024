const express = require('express');
const Todo = require('./models/Todo');
const app = express();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', async(req,res)=>{
    const todos = await Todo.find()
    res.render('index', {todos})
})

app.post('/api/todos', async(req,res)=>{
    const todo = new Todo({
        todo:req.body.todo
    })
    await todo.save()
    res.json(todo)
})

app.put('/api/todo/:id', async (req,res)=>{
    const todo = Todo.findById(req.params?.id)
    todo.done = !todo.done
    await todo.save()
    res.json(todo)
})

app.get('/api/todo/:id', async (req,res)=>{
    await Todo.findByIdAndDelete(req.params?.id)
    res.json({message:"deleted"})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });