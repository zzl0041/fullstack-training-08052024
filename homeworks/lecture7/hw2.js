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
const PORT = 3000;

function helpPrintJson(res, obj) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(obj));
  res.end();
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const timepath = parsedUrl.pathname;
  const iso = parsedUrl.query.iso;
  if (!iso) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Iso is not given.');
    return; // Need to add a return to prevent code keeping running if iso not given
  }

  const date = new Date(iso);

  if (timepath === '/api/parsetime') {

    let parsetime = {}; // hour, minute, second
    parsetime.hour = date.getUTCHours();
    parsetime.minute = date.getUTCMinutes();
    parsetime.second = date.getUTCSeconds();
    helpPrintJson(res, parsetime);
  }

  else if (timepath === '/api/unixtime') {
    let unixtime = { unixtime: date.getTime() }; //wrap in a obj before handle it
    helpPrintJson(res, unixtime);
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('wrong path given');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});