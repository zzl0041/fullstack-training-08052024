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
const server = http.createServer((req, res) => {
    const { url: requestUrl, method } = req;
    if (method === 'GET') {
        const parsedUrl = url.parse(requestUrl, true);
        const pathname = parsedUrl.pathname;
        const isoTime = parsedUrl.query.iso;
        console.log('requestUrl:', requestUrl);
        console.log('parsedUrl:', parsedUrl);
        console.log('pathname:', pathname);
        if (pathname === '/api/parsetime') {
            if (!isoTime) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'ISO time is required' }));
                return;
            }
            const date = new Date(isoTime);
            // validate date format
            // i.e. http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:76.789Z
            if (isNaN(date.getTime())) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid ISO time format' }));
                return;
            }
            const timeObj = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(timeObj));
        } else if (pathname === '/api/unixtime') {
            if (!isoTime) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'ISO time is required' }));
                return;
            }
            const date = new Date(isoTime);
            const timeObject = {
                unixtime: date.getTime()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(timeObject));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid URL' }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end('Unsupported method');
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });