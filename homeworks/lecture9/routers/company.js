const express = require('express');
const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees
} = require('../controllers/company');

const router = express.Router();

// /api/companies
router.get('/companies', getAllCompanies);

router.get('/companies/:id', getOneCompany);

// Route to get all employees of a specific company by company ID
router.get('/companies/:id/employees', getCompanyEmployees);

router.post('/companies', createCompany);

router.put('/companies/:id', updateCompany);

router.delete('/companies/:id', deleteCompany);

module.exports = router;
