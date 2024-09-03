const express = require('express');
const router = express.Router();

const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee');

const tokenAuth = require('../middlewares/tokenAuth');

router.post('/employees', createEmployee); 
router.get('/employees/:id', tokenAuth, getEmployeeById); 
router.get('/employees', tokenAuth, getAllEmployees); 
router.put('/employees/:id', updateEmployee); 
router.delete('/employees/:id', deleteEmployee); 

module.exports = router;