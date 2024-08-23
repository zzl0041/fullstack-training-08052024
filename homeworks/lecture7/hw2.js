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
const fs = require('fs');
const path = require('path');
const url = require('url'); 

const server = http.createServer((request, response) => {
  const { url: request_url, method: request_method } = request;
  const url_obj = url.parse(request_url, true);
  console.log(url_obj);
  if (request_method === 'GET') {
    if (url_obj.pathname === '/api/parsetime') {
        let input_time = new Date(url_obj.query.iso);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({
            hour: input_time.getHours(),
            minute: input_time.getMinutes(),
            second: input_time.getSeconds(),
        }));
        response.end();
    } 
    else if (url_obj.pathname === '/api/unixtime') {
        let input_time = new Date(url_obj.query.iso);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({
            unixtime: input_time.getTime(),
        }));
        response.end();
    }
    else {
        response.end('404 Not Found');
    }
  }
  else {
    response.end('Unsupported Method');
  }
});

server.listen(5500, () => {
  console.log('Server is running on port 5500');
});
