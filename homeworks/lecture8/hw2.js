/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 *
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 *
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { query1, query2 } = parsedUrl.query;

  if (parsedUrl.pathname === "/hw2" && query1 && query2) {
    const apiUrl1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
    const apiUrl2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;

    // Fetch data for query1
    https.get(apiUrl1, (response1) => {
      let data1 = "";

      response1.on("data", (chunk) => {
        data1 += chunk;
      });

      response1.on("end", () => {
        const result1 = JSON.parse(data1).hits[0];

        // Fetch data for query2
        https.get(apiUrl2, (response2) => {
          let data2 = "";

          response2.on("data", (chunk) => {
            data2 += chunk;
          });

          response2.on("end", () => {
            const result2 = JSON.parse(data2).hits[0];

            const finalResult = {
              [query1]: {
                created_at: result1.created_at,
                title: result1.title,
              },
              [query2]: {
                created_at: result2.created_at,
                title: result2.title,
              },
            };

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(finalResult));
          });
        });
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
