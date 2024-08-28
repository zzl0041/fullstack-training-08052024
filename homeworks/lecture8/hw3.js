/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const URL = require('url')

app.use(express.urlencoded({extended: true}))

app.post('/',(req,res)=>{
    const name = req.body.name
    const age = req.body.age
    res.status(302).setHeader('Location',`/home.html?name:${name}&age:${age}`)
    res.end()
})

app.get('/',(req,res)=>{
    fs.readFile(path.join(__dirname, 'home.html'),(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).end('html is loading wrong')
        }
        res.setHeader('Content-Type', 'text/html');
        res.write(data)
        res.end()
    })
    
})
app.get('/home.html',(req,res)=>{
    const url = URL.parse(req.url, true)
    const query = url.query
    fs.readFile(path.join(__dirname, 'home.html'),(err,data)=>{
        if(err){
            res.status(500).send('err loading')
            return
        }
        res.setHeader('Content-Type', 'text/html');
        res.write(data)
        res.write(`<h3>title</h3>
            <h3>name: ${query.name || 'not provided'}</h3>
            <h3>age: ${query.age || 'not provided'}</h3>`)
        res.end()    
    })
    
})

app.listen(3000,()=>{
    console.log('server is starting')
})