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
const http = require("http");
const url = require("url");

function handleParseTime(isoDate) {
  const date = new Date(isoDate);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
}

function handleUnixTime(isoDate) {
  const date = new Date(isoDate);
  return {
    unixtime: date.getTime(),
  };
}

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const isoDate = parseUrl.query.iso;
  let result;
  if (parseUrl.pathname === "/api/parsetime") {
    result = handleParseTime(isoDate);
  } else if (parseUrl.pathname === "/api/unixtime") {
    result = handleUnixTime(isoDate);
  }
  if (result) {
    res.writeHead(200, { contentType: "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
