const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hw2 router");
});

router.get("/parsetime", (req, res) => {
  // console.log(req.query.iso);
  const isoTime = req.query.iso;
  if (!isoTime) {
    res.send("No iso time provide.");
  }
  const parseTime = new Date(isoTime);
  res.json({
    hour: parseTime.getHours(),
    minute: parseTime.getMinutes(),
    second: parseTime.getSeconds(),
  });
});

router.get("/unixtime", (req, res) => {
  const isoTime = req.query.iso;
  if (!isoTime) {
    res.send("No iso time provide.");
  }
  const unixTimestamp = new Date(isoTime);
  res.json({
    unixtime: unixTimestamp.getTime(),
  });
});

module.exports = router;
