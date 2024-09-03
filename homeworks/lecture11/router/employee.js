const express = require('express');

const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee');
const auth = require('../middlewares/auth');

const router = express.Router();

// /api/employees
router.get('/employees', auth, getAllEmployees);

router.get('/employees/:id', auth, getOneEmployee);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;
