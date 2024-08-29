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

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const query1 = req.query.query1;
  const query2 = req.query.query2;

  let selectData1 = null;
  let selectData2 = null;

  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    );
    const data1 = await response.json();
    selectData1 = {
      created_at: data1.hits[0].created_at,
      title: data1.hits[0].title,
    };
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }

  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    );
    const data2 = await response.json();
    selectData2 = {
      created_at: data2.hits[0].created_at,
      title: data2.hits[0].title,
    };
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }

  const final = {
    [query1]: selectData1,
    [query2]: selectData2,
  };

  res.json(final);
});

module.exports = router;
