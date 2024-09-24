const Employee = require('../models/employee');
const Company = require('../models/company');

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    await Company.findByIdAndUpdate(req.body.company, {
      $push: { employees: employee._id },
    });

    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    // If user is authenticated, show full employee details
    if (req.user) {
      return res.status(200).json(employees);
    }

    // If user is not authenticated, only show firstName and lastName
    const limitedEmployees = employees.map((employee) => ({
      firstName: employee.firstName,
      lastName: employee.lastName,
    }));

    return res.status(200).json(limitedEmployees);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get employee by id
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate('company')
      .populate('manager');
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update employee by id
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete employee by id
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    await Company.findByIdAndUpdate(employee.company, {
      $pull: { employees: employee._id },
    });

    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeesOfCompany = async (req, res) => {
  try {
    const { companyId } = req.user; // Extract company ID from token

    // Find all employees from the same company
    const employees = await Employee.find({ company: companyId });

    return res.status(200).json(employees);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};