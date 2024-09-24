const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    // Find employee based on firstName and lastName
    const employee = await Employee.findOne({ firstName, lastName });
    
    if (!employee) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: employee._id,
        companyId: employee.company, // Save company ID in token for authorization
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
