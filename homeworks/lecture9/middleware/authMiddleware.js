const jwt = require('jsonwebtoken')
const Employee = require('../models/employeeModel.js')
const Company = require('../models/companyModel.js')

const auth = async (req, res, next) => {
  const token = req.cookies.jwt

  req.isAuthenticated = token !== undefined

  if (token) {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // const employee = await Employee.findById(decoded.employee)
    // req.company = await Company.findById(employee.company)
  }

  return next()
}

module.exports = auth
