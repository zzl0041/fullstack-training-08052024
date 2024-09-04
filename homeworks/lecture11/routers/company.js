const express = require('express');
const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyEmployees
} = require('../controllers/company');

const auth = require('../middlewares/auth');
const router = express.Router();

// /api/companies
router.get('/companies', getAllCompanies);
router.get('/companies/:id', getOneCompany);

router.get('/companies/:id/employees', auth, getCompanyEmployees);

router.post('/companies', auth, createCompany);
router.put('/companies/:id', auth, updateCompany);
router.delete('/companies/:id', auth, deleteCompany);

module.exports = router;
