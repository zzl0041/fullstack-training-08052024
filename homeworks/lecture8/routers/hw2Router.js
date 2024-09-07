
const express = require('express');
const router = express.Router();

router.get('/:timetype', (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).send('ISO data is not given.');
  }

  const date = new Date(iso);

  if (req.params.timetype === 'parsetime') {
    let parsetime = {}; // hour, minute, second
    parsetime.hour = date.getUTCHours();
    parsetime.minute = date.getUTCMinutes();
    parsetime.second = date.getUTCSeconds();
    return res.json(parsetime);
  }

  else if (req.params.timetype === 'unixtime') {
    let unixtime = { unixtime: date.getTime() }; //wrap in a obj before handle it
    return res.json(unixtime);
  }

  else {
    return res.status(404).send("Wrong timetype is given.");
  }
});

module.exports = router;