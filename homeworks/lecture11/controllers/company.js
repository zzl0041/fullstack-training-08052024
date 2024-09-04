// - Create a new company
// - Get a company by id
// - Update a company by id
// - Delete a company by id
// - Get all companies

const Company = require("../models/Company");

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: "Company created", company: company });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
    company.industry = req.body.industry ?? company.industry;
    company.employees = req.body.employees ?? company.employees;
    await company.save();
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Company deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllEmployeesOfCompany = async (req, res) => {
  try {
    if (!req.user)
      return res.status(403).json({ message: "Unauthorized access" });
    if (req.params?.id !== req.user.companyId)
      return res
        .status(403)
        .json({
          message:
            "User ONLY have access to get employees of their own company",
        });
    const company = await Company.findById(req.user.companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(company.employees);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getAllEmployeesOfCompany,
};
