const express = require('express');

const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees,
} = require('../controllers/company');

const router = express.Router();

// /api/companies
router.get('/companies/:id/employees', getCompanyEmployees);

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getOneCompany);

router.post('/companies', createCompany);

router.put('/companies/:id', updateCompany);

router.delete('/companies/:id', deleteCompany);

module.exports = router;
