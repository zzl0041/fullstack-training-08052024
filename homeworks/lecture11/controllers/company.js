const Company = require('../models/Company');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    console.error('Error fetching company:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createCompany = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company created' });
  } catch (err) {
    console.log('Error creating company:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateCompany = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    // find the company
    const company = await Company.findById(req.params?.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    // save the company
    await company.save();
    res.json(company);
  } catch (err) {
    console.error('Error updating company:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    const company = await Company.findByIdAndDelete(req.params?.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(204).json({ message: 'Company deleted' });
  } catch (err) {
    console.error('Error deleting company:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getCompanyEmployees = async (req, res) => {
    try {
      const company = await Company.findById(req.params?.id).populate('employees');
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      if (req.user && req.user.company.toString() === company._id.toString()) {
        res.status(200).json(company.employees);
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
    } catch (err) {
      console.error('Error fetching company all employees:', err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees
};
