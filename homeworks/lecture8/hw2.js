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
const https = require('https');
const express = require('express');
const { title } = require('process');
const app = express();

//Use promise to make sure asynchronous request complete
function fetchData(query) {
  return new Promise((resolve, reject) => {
    let data = '';

    https.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`, (response) => {

      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      });
      response.on('error', (err) => {
        reject(`Error during Response: ${err.message}`);
      });
    }).on('error', (err) => {
      reject(`Error before Response: ${err.message}`);
    });
  });
}
// make the handler function async to use await
app.get('/hw2', async (req, res, next) => {
  const query1 = req.query.query1;
  const query2 = req.query.query2;

  try {
    const [data1, data2] = await Promise.all([fetchData(query1), fetchData(query2)]);
    let resultData = {};

    function dataProcess(query, data) {

      // resultData[`${query}`] = [];
      // parsedData.hits.forEach((hit) => {
      //   let tempObj = {};
      //   tempObj.created_at = hit.created_at;
      //   tempObj.title = hit.title;
      //   resultData[`${query}`].push(tempObj);
      // });

      resultData[`${query}`] = data.hits.map((hit) => ({
        created_at: hit.created_at,
        title: hit.title,
      }));
    }
    dataProcess(query1, data1);
    dataProcess(query2, data2);

    res.json(resultData);

  }
  catch (err) {
    res.status(500).send("Fetching Data Error.");
  }
});


app.listen(3000, () => console.log('Server is running on port 3000.'));