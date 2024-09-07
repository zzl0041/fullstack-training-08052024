const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');
const { authenticateToken } = require('../utils/auth');

router.post('/employees', authenticateToken, async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company');
    if (!employee) {
      return res.status(404).send("The employee cannot be found.");
    }

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(200).send({
        firstName: employee.firstName,
        lastName: employee.lastName
      });
    }
    authenticateToken(req, res, () => {
      res.status(200).send(employee);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/employees/:id', authenticateToken, async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findByIdAndUpdate(employeeId, req.body, {
      new: true,
      runValidators: true
    });
    if (!employee) return res.status(404).send("The employee cannot be found.");
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/employees/:id', authenticateToken, async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findByIdAndDelete(employeeId);
    if (!employee) {
      return res.status(404).send("The employee cannot be found.");
    }
    res.status(200).send(`Employee ${employee.firstName} ${employee.lastName} deleted.`);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/employees', authenticateToken, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/companies/:id/employees', authenticateToken, async (req, res) => {
  try {
    const companyId = req.params.id;
    if (req.user.company.toString() !== companyId) {
      return res.status(403).send("Do not have access to this company's employees.");
    }

    const company = await Company.findById(companyId).populate('employees');
    if (!company) return res.status(404).send("Company not found.");

    res.status(200).send(company.employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;