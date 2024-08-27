/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require('http')
const URL = require('url')
const querystring = require('querystring')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        let body = "";
        req.on('data',chunk=>{
            body = chunk.toString()
        })
        req.on('end',()=>{
            const parsedBody = querystring.parse(body)
            const name = encodeURIComponent(parsedBody.name ||'unknown')
            const age = encodeURIComponent(parsedBody.age||'unknown')

            res.statusCode = 302;
            res.setHeader('Location',`/home.html?name:${name}&age:${age}`)
            res.end()
        })
    }else if(req.method === 'GET' && req.url.startsWith('/home.html')){
        const url = URL.parse(req.url, true)
        const query = url.query
        fs.readFile(path.join(__dirname,'home.html'),(err, data)=>{
            if(err){
                res.statusCode = 500
                res.end("err loading")
                return 
            }
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.write(`
                <h2>Submitted Data:</h2>
                <h3>Name: ${query.name || 'Not provided'}</h>
                <h3>Age: ${query.age || 'Not provided'}</h3>
            `);
            res.end();
        })
    }else{
        res.statusCode = 400;
        res.end('page not found')
    }
})

server.listen(3000,()=>{
    console.log('listen on 3000')
})