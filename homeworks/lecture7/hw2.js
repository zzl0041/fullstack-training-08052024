/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here
const http = require('http')
const URL = require('url')

const server = http.createServer((req,res)=>{
    const url = URL.parse(req.url, true);
    const iso = url.query.iso
    if(url.pathname === '/api/parsetime' && iso){
        const date = new Date(iso)
        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    }else if(url.pathname === '/api/unixtime' && iso){
        const date = new Date(iso)
        const result = {
            unixtime:date.getTime()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end('not found')
    }
})

server.listen(8000,()=>{
    console.log('start')
})
