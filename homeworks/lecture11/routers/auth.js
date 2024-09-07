const express = require('express');
const Employee = require('../models/employee');
const { generateToken } = require('../utils/auth');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const employee = await Employee.findOne({ firstName, lastName });

    if (!employee) {
      return res.status(400).send('Invalid credentials');
    }

    const token = generateToken(employee);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
