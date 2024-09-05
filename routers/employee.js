const express = require('express')

const {createEmployee,
    findEmployee,
    findAllEmployees,
    findAllEmployeesOfSameCompany,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee')

const auth = require('../middlewares/auth');
const router = express.Router()

router.post('/employee', createEmployee)
router.get('/employee/:id',findEmployee)
router.get('/employee/:id',auth,findEmployee)
router.get('/employees',findAllEmployees)
router.get('employees/:id', auth,findAllEmployeesOfSameCompany)
router.post('/employee/:id', updateEmployee)
router.get('/employee/delete/:id',deleteEmployee)



