const express = require('express');

const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee');

const router = express.Router();

// /api/employees
router.get('/employees', getAllEmployees);

router.get('/employees/:id', getOneEmployee);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;
