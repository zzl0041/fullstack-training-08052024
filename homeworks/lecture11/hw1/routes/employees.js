const express = require("express");
const Employee = require("../models/Employee");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/employees", authenticate, async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.userId }).select(
      "firstName lastName"
    );
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/employees/:id", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee || employee.company.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/employees", authenticate, async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/employees/:id", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee || employee.company.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/employees/:id", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee || employee.company.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
