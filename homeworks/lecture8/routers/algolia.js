const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { query1, query2 } = req.query;
  if (!query1 || !query2) {
    return res
      .status(400)
      .json({ error: "Both query1 and query2 are required." });
  }
  try {
    const res1 = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    );
    const data1 = await res1.json();
    const res2 = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`
    );
    const data2 = await res2.json();
    const result = {
      [query1]: data1.hits[0]
        ? {
            created_at: data1.hits[0].created_at,
            title: data1.hits[0].title,
          }
        : {},
      [query2]: data2.hits[0]
        ? {
            created_at: data2.hits[0].created_at,
            title: data2.hits[0].title,
          }
        : {},
    };
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data from Algolia API" });
  }
});

module.exports = router;
