const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

router.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findById(employeeId).populate('company');
    if (!employee) {
      return res.status(404).send("The employee cannot be found.");
    }
    res.status(200).send(employee);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findByIdAndUpdate(employeeId, req.body, {
      new: true,
      runValidators: true
    });
    if (!employee) return res.status(404).send();
    res.status(200).send(employee);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findByIdAndDelete(employeeId);
    if (!employee) return res.status(404).send();
    res.status(200).send(employee);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    if (!employees) return res.status(404).send();
    res.send(employees);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.get('/companies/:id/employees', async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId).populate('employees');
    if (!company) return res.status(404).send();
    res.status(200).send(company.employees);
  }
  catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;