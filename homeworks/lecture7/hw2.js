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
const http = require('http');
const url = require('url');
const server = http.createServer((req, res)=>{
    const {url: requestUrl, method} = req;
    if(method==='GET'){
        const parsedUrl = url.parse(requestUrl, true);
        const path = parsedUrl.pathname;
        const time = parsedUrl.query.iso;
        if(path==='/api/parsetime'){
            const date = new Date(time);
            const jsonTime = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(jsonTime));
        }else if(path==='/api/unixtime'){
            const date = new Date(time);
            const jsonTime = {
                unixtime: date.getTime()
            };
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(jsonTime));
        }
    }else{
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end('Unsupported method');
    }
})
server.listen(3002, ()=>{
    console.log('3002 port');
});