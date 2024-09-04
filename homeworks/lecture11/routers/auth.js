const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const CustomAPIError = require('../errors'); 
const router = express.Router();


router.post('/login', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    // console.log('Received firstName:', firstName);
    // console.log('Received lastName:', lastName);
    let user = await Employee.findOne({ firstName, lastName });
    // console.log('User Found:', user);

    if (!user) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (user.lastName !== lastName) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }

    const payload = {
      user: {
        id: user._id,
        company: user.company
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
