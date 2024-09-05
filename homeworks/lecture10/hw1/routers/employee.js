const express = require('express')

const {createEmployee,
    findEmployee,
    findAllEmployees,
    findAllEmployeesOfSameCompany,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee')

const router = express.Router()

router.post('/employee', createEmployee)
router.get('/employee/:id',findEmployee)
router.get('/employees',findAllEmployees)
router.get('employees/:id', findAllEmployeesOfSameCompany)
router.post('/employee/:id', updateEmployee)
router.get('/employee/delete/:id', deleteEmployee)



