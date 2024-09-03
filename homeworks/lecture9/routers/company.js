const express = require('express');
const router = express.Router();

const {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getEmployeesByCompanyId,
} = require('../controllers/company');

const tokenAuth = require('../middlewares/tokenAuth');


router.post('/companies', createCompany);
router.get('/companies/:id/employees', tokenAuth, getEmployeesByCompanyId);
router.get('/companies/:id', getCompanyById);
router.get('/companies', getAllCompanies);
router.put('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);

module.exports = router;
