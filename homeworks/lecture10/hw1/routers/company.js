const express = require('express')

const {
    createCompany,
    findCompany,
    findAllCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company')

const router = express.Router()

router.post('/company', createCompany)
router.get('/company/:id', findCompany)
router.get('/companies', findAllCompany)
router.post('/company/:id', updateCompany)
router.get('/company/delete/:id',deleteCompany)


