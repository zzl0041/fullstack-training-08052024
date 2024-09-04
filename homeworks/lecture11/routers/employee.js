const express = require('express');
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employee');

const auth = require('../middlewares/auth');
const router = express.Router();

// /api/employees
router.get('/employees', auth, getAllEmployees);
router.get('/employees/:id', auth, getOneEmployee);

router.post('/employees', auth, createEmployee);
router.put('/employees/:id', auth, updateEmployee);
router.delete('/employees/:id', auth, deleteEmployee);

module.exports = router;
