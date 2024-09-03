const Employee = require('../models/Employee');
const Company = require('../models/Company');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    if (req.haveToken) {
      res.status(200).json(employees);
    } else {
      const employeeNames = employees.map((employee) => ({
        firstName: employee.firstName,
        lastName: employee.lastName,
      }));
      res.status(200).json(employeeNames);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    console.log(employee);
    console.log(req.haveToken);

    if (req.haveToken) {
      res.status(200).json(employee);
    } else {
      const employeeName = {
        firstName: employee.firstName,
        lastName: employee.lastName,
      };
      res.status(200).json(employeeName);
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    const employee = new Employee(req.body);
    await employee.save();

    company.employees.push(employee._id);
    await company.save();

    res.status(200).json(employee);
  } catch (err) {
    console.error('Error creating employee:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
      {
        new: true,
      }
    );
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found!' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    await Employee.findByIdAndDelete(req.params?.id);
    const company = await Company.findById(employee.company);
    if (company) {
      company.employees = company.employees.filter(
        (empId) => empId.toString() !== employee._id.toString()
      );
      await company.save();
    }

    res
      .status(200)
      .json({ message: 'Employee deleted and removed from company' });
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
