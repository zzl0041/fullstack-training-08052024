const express = require('express')
const {
  getAllCompanies,
  createCompany,
  deleteCompany,
  getCompanyById,
  updateCompany,
  getEmployeesOfCompany,
} = require('../controllers/companyController')

const router = express.Router()

router.route('/').get(getAllCompanies).post(createCompany)

router
  .route('/:id')
  .get(getCompanyById)
  .put(updateCompany)
  .delete(deleteCompany)

router.get('/employees/:id', getEmployeesOfCompany)

module.exports = router
