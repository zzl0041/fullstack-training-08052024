const Company = require('../models/company');
const Employee = require('../models/employee');

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get company by id
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update company by id
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete company by id
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees of a company
exports.getEmployeesOfCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company.employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
