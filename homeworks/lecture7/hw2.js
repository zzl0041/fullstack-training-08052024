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
const urls = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  res.writeHead(200, { contentType: 'application/json' });

  if (method === 'GET') {
    const parseUrl = urls.parse(url, true);
    const pathName = parseUrl.pathname;
    const iso = parseUrl.query.iso;
    const date = new Date(iso);

    if (pathName === '/api/parsetime') {
      const parseDate = {};
      parseDate.hour = date.getHours();
      parseDate.minute = date.getMinutes();
      parseDate.second = date.getSeconds();
      res.end(JSON.stringify(parseDate));
    } else if (pathName === '/api/unixtime') {
      const unixTime = { unixtime: date.getTime() };
      res.end(JSON.stringify(unixTime));
    } else {
      res.end('this is the 404 page');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
