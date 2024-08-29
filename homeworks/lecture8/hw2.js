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

const { json } = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hw2");
});

app.get("/hw2", async (req, res) => {
  const { query1, query2 } = req.query;
  let res1, data1, res2, data2;
  try {
    res1 = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    );
    data1 = await res1.json();
    // console.log(data1.hits[0].created_at);
    // console.log(data1.hits[0].title);
  } catch (err) {
    console.log(`error to await res1 or data1`);
    send(err);
  }

  try {
    res2 = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`
    );
    data2 = await res2.json();
    // console.log(data2.hits[0].created_at);
    // console.log(data2.hits[0].title);
  } catch (err) {
    console.log(`error to await res1 or data1`);
    send(err);
  }

  const create1 = data1.hits[0].created_at;
  const title1 = data1.hits[0].title;
  const create2 = data1.hits[0].created_at;
  const title2 = data1.hits[0].title;

  res.json({
    query1: { created_at: create1, title: title1 },
    query2: { created_at: create2, title: title2 },
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
