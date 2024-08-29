const express = require("express");
const router = express.Router();

router.get("/:action", (req, res) => {
  const isoString = req.query.iso;
  if (!isoString) {
    return res.status(400).json({ error: "ISO string is required" });
  }
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: "Invalid date" });
  }

  let result;
  if (req.params.action === "parsetime") {
    result = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    };
  } else if (req.params.action === "unixtime") {
    result = {
      unixtime: date.getTime(),
    };
  } else {
    return res.status(404).json({ error: "Invalid URL" });
  }
  res.status(200).json(result);
});

module.exports = router;
