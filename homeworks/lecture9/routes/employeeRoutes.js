const express = require('express')
const {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
} = require('../controllers/employeeController')

const auth = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').get(auth, getAllEmployees).post(createEmployee)

router
  .route('/:id')
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee)

module.exports = router
