const Company = require('../models/companyModel.js')
const Employee = require('../models/employeeModel.js')

const createEmployee = async (req, res) => {
  const {
    firstName,
    lastName,
    startDate,
    jobTitle,
    resigned,
    salary,
    manager,
    company: companyId,
  } = req.body

  try {
    const createdEmployee = await Employee.create({
      firstName,
      lastName,
      startDate,
      jobTitle,
      resigned,
      salary,
      manager,
      company: companyId,
    })

    const cpn = await Company.findById(companyId)

    if (cpn) {
      cpn.employees = [...cpn.employees, createdEmployee]
      cpn.save()
    }

    res.status(201).json(createdEmployee)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' })
  }
}

const getEmployeeById = async (req, res) => {
  const id = req.params.id

  try {
    const employee = await Employee.findById(id)

    if (employee) {
      res.status(200).json({
        _id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        startDate: employee.startDate,
        jobTitle: employee.jobTitle,
        resigned: employee.resigned,
        salary: employee.salary,
        company: employee.company,
        manager: employee.manager,
      })
    } else {
      res.status(404).json({ error: 'Employee not found' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to retrieve employee', details: error.message })
  }
}

const updateEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {
    employee.name = req.body.name || employee.name
    employee.description = req.body.description || employee.description
    employee.headquarters = req.body.headquarters || employee.headquarters
    employee.industry = req.body.industry || employee.industry

    const updatedEmployee = await employee.save()

    res.status(200).json({
      _id: updatedEmployee._id,
      name: updatedEmployee.name,
      description: updatedEmployee.description,
      headquarters: updatedEmployee.headquarters,
      industry: updatedEmployee.industry,
      employees: updatedEmployee.employees,
    })
  } else {
    res
      .status(404)
      .json({ error: 'Failed to update employee', details: error.message })
  }
}

const deleteEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {
    await Employee.deleteOne({ _id: employee._id })
    res.status(200).json({ message: 'Employee deleted' })
  } else {
    res
      .status(404)
      .json({ error: 'Failed to delete employee', details: error.message })
  }
}

const getAllEmployees = async (req, res) => {
  let employees

  if (req.isAuthenticated) {
    // const companyId = req.company

    employees = await Employee.find({})
  } else {
    employees = await Employee.find({}).select('firstName lastName -_id')
  }

  res.status(200).json(employees)
}

module.exports = {
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
}
