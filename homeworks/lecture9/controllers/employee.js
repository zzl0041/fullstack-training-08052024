const Employee = require('../models/Employee');
const Company = require('../models/Company');

const createEmployee = async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    // create employee
    const employee = new Employee(req.body);
    await employee.save();
    // update company as well
    company.employees.push(employee._id);
    await company.save();
    // response
    res.status(201).json({ message: 'Employee created' });
  } 
  catch (err) {
    console.log(err.message);
    if (err.name === 'ValidationError') res.status(400).json({ message: 'invalid Employee data' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployees = async (req, res) => {
  // old method
  // try {
  //   const employees = await Employee.find();
  //   res.status(200).json(employees);
  // } 
  // catch (err) {
  //   console.log(err.message);
  //   res.status(500).json({ message: 'Server Error' });
  // }
  if (req.user) {
    try {
      const user = await Employee.findById(req.user.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      const company = await Company.findById(user.company);
      if (!company) return res.status(404).json({ message: 'Company not found' });
      const employees = await Promise.all(company.employees.map(async employee => Employee.findById(employee)));
      res.status(200).json(employees);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  else {
    res.status(401).json({ message: 'Permission Denied' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    if (req.user) res.status(200).json(employee);
    else res.status(200).json({ firstName: employee.firstName, lastName: employee.lastName });
  } 
  catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Employee ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    let newCompany = null;
    if (req.body.company) {
      newCompany = await Company.findById(req.body.company);
      if (!newCompany) return res.status(404).json({ message: 'Company not found' });
    } 
    const employee = await Employee.findById(req.params?.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    const oldCompany = await Company.findById(employee.company);
    // update employee
    Object.keys(employee.toObject()).forEach(prop => employee[prop] = req.body[prop] ?? employee[prop]);
    await employee.save();
    // update company as well
    if (newCompany && (!newCompany._id.equals(oldCompany._id))) {
      newCompany.employees.push(employee._id);
      newCompany.save();
      oldCompany.employees.pull(employee._id);
      oldCompany.save();
    }
    res.status(200).json({ message: 'Update employee success' });
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Employee ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params?.id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    // delete it in company as well
    const company = await Company.findById(deletedEmployee.company);
    company.employees.pull(deletedEmployee._id);
    company.save();
    res.status(200).json({ message: 'Employee deleted' });
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Employee ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
