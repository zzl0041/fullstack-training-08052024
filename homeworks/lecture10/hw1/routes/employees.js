const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const Company = require("../models/Company");

// Create a new employee
router.post("/", async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) {
      return res.status(400).json({ message: "Company not found" });
    }
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: "Failed to create employee", error });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("company")
      .populate("manager");
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve employees", error });
  }
});

// Get an employee by id
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate("company")
      .populate("manager");
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve employee", error });
  }
});

// Update an employee by id
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: "Failed to update employee", error });
  }
});

// Delete an employee by id
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete employee", error });
  }
});

// Get all employees of a company
router.get("/company/:companyId", async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId })
      .populate("company")
      .populate("manager");
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve employees", error });
  }
});

module.exports = router;
