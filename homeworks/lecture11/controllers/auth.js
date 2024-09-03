const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const CustomAPIError = require('../error');
require('dotenv').config();

const login = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    let employee = await Employee.findOne({ firstName });

    if (!employee) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (employee.lastName != lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      employee: {
        id: employee._id,
        company: employee.company,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = login;
