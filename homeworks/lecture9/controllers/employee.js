// - Create a new employee
// - Get an employee by id
// - Update an employee by id
// - Delete an employee by id
// - Get all employees
// - Get all employees of a company

const Employee = require("../models/Employee");
const Company = require("../models/Company");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    // !!!!!!!!!!!!
    const company = await Company.findById(employee.companyId);
    company.employees = company.employees || [];
    company.employees.push(employee);
    await company.save();
    res.status(201).json({ message: "Employee created", employee: employee });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.companyId = req.body.companyId ?? employee.companyId;
    employee.startDate = req.body.startDate ?? employee.startDate;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.resigned = req.body.resigned ?? employee.resigned;
    employee.salary = req.body.salary ?? employee.salary;
    employee.manager = req.body.manager ?? employee.manager;
    await employee.save();
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
