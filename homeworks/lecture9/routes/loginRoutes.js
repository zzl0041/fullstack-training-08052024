const express = require('express')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employeeModel.js')

const router = express.Router()

router.post('/', async (req, res) => {
  const { firstName, lastName } = req.body
  const employee = await Employee.findOne({ firstName })

  if (!employee || employee.lastName !== lastName) {
    return res.status(400).json({ message: 'Invalid Credentials' })
  }

  const payload = { employee: { id: employee._id } }
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })

  res.status(200).json({ token })
})

module.exports = router
