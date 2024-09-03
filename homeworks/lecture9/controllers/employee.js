const Employee = require('../models/Employee');
const Company = require('../models/Company');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('company');
    res.status(200).json(employees);
  } catch (err) {
    cconsole.error('Error fetching all employees:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id).populate('company');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    console.error('Error fetching one employee:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    const company = await Company.findById(employee.company);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.employees.push(employee._id);
    await company.save();

    res.status(201).json({ message: 'Employee created', employee });
  } catch (err) {
    console.log('Error creating employee:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated', employee });
  } catch (err) {
    console.error('Error updating employee:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params?.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    console.error('Error deleting employee:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
