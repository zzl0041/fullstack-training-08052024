/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.get('/home.html', (req, res)=>{
    const {title, content} = req.query;
    res.render('home', {title, content});
});

app.post('/create-post', (req, res)=>{
    const{title, content} = req.body;
    res.redirect(`/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
})

app.use((req,res)=>{
    res.status(404).send('this is the 404 page');
});

app.listen(PORT, ()=>{
    console.log('running on ${PORT}');
})