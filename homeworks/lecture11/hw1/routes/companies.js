const express = require("express");
const Company = require("../models/Company");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a new company
router.post("/companies", authenticate, async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all companies
router.get("/companies", authenticate, async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get a company by id
router.get("/companies/:id", authenticate, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a company by id
router.put("/companies/:id", authenticate, async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a company by id
router.delete("/companies/:id", authenticate, async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
