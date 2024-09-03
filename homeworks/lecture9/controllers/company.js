const Company = require('../models/Company');
const Employee = require('../models/Employee');

const createCompany = async (req, res) => {
  if (!req.body.name) res.status(400).json({ message: 'Missing required fields' });
  else if (req.body.employees) res.status(400).json({ message: 'Employees cannot be edited' });
  else {
    try {
      const company = new Company(req.body);
      await company.save();
      res.status(201).json({ message: 'Company created' });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Company ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req, res) => {
  if (req.body.employees) return res.status(400).json({ message: 'Employees cannot be edited' });
  try {
    let company = await Company.findById(req.params?.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    // update
    Object.keys(company.toObject()).forEach(prop => company[prop] = req.body[prop] ?? company[prop]);
    await company.save();
    res.status(200).json({ message: 'Update company success' });
  } catch (err) {
    console.error(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Company ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params?.id);
    if (!deletedCompany) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Company ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const getEmployeesByCompanyId = async (req, res) => {
  // try {
  //   const company = await Company.findById(req.params?.id);
  //   if (!company) return res.status(404).json({ message: 'Company not found' });
  //   const employees = await Promise.all(company.employees.map(async employee => Employee.findById(employee)));
  //   res.status(200).json(employees);
  // } catch (err) {
  //   console.error(err.message);
  //   if (err.name === 'CastError') res.status(400).json({ message: 'invalid Company ID' });
  //   else res.status(500).json({ message: 'Server Error' });
  // }
  if (req.user) {
    try {
      const user = await Employee.findById(req.user.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      if (user.company.toString() != req.params.id) return res.status(401).json({ message: 'Permission Denied' });
      const company = await Company.findById(user.company);
      if (!company) return res.status(404).json({ message: 'Company not found' });
      const employees = await Promise.all(company.employees.map(async employee => Employee.findById(employee)));
      res.status(200).json(employees);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  else {
    res.status(401).json({ message: 'Permission Denied' });
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getEmployeesByCompanyId,
};
