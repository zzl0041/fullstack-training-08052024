const Company = require('../models/Company');
const Employee = require('../models/Employee');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ massage: 'Server Error' });
  }
};

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({ message: 'Company not found!' });
    }
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ massage: 'Server Error' });
  }
};

const getCompanyEmployees = async (req, res) => {
  if (!req.haveToken) {
    return res.status(401).json({ message: 'Unauthorized Action!' });
  } else {
    const companyID = req.employee.company;
    try {
      const employees = await Employee.find({ company: companyID });
      if (employees.length === 0) {
        return res.status(404).json({ message: 'Company not found!' });
      }
      res.status(200).json(employees);
    } catch (err) {
      console.error('Error fetching employees:', err);
      res.status(500).json({ message: err.massage });
    }
  }
};

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees,
};
