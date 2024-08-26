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
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  // parse the url
  const parsedUrl = url.parse(reqUrl, true);
  // console.log(parsedUrl);
  // destructuring the parsed url
  const {
    pathname,
    query: { iso: isoTime },
  } = parsedUrl;
  // console.log(pathname);
  // console.log(query);
  // console.log(isoTime);
  if (method === "GET") {
    if (pathname === "/api/parsetime") {
      if (!isoTime) {
        res.end("No iso time provide.");
      }
      // convert to time object
      const parseTime = new Date(isoTime);
      // write a json file and return it
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          hour: parseTime.getHours(),
          minute: parseTime.getMinutes(),
          second: parseTime.getSeconds(),
        })
      );
      res.end();
    } else if (pathname === "/api/unixtime") {
      if (!isoTime) {
        res.end("No iso time provide.");
      }
      // convert to time object and get unix time stamp
      const unixTimestamp = new Date(isoTime).getTime();
      // console.log(unixTimestamp);
      // write a json file and return it
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          unixtime: unixTimestamp,
        })
      );
      res.end();
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
