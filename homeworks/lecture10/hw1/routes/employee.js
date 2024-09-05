const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

router.get('/employees', async(req, res)=>{
    try{
        const employees = await Employee.find().populate('company').populate('manager');
        res.status(200).json(employees);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/employees/:employeeId', async (req, res)=>{
    try{
        const employee = await Employee.findById(req.params.employeeId).populate('company').populate('manager');
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.status(200).json(employee);
    }catch (err){
        res.status(500).json({error: err.message});
    }
});

router.post('/employees', async(req, res)=>{
    try{
        const company = await Company.findById(req.body.company);
        if(!company) return res.status(404).json({error: 'Company not found'});
        const employee = new Employee(req.body);
        await employee.save();
        company.employees.push(employee);
        await company.save();

        res.status(201).json(employee);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.put('/employees/:employeeId', async(req, res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, {new: true});
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.status(200).json(employee);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.patch('/employees/:employeeId', async(req, res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, {new: true});
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.status(200).json(employee);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete('/employees/:employeeId', async(req, res)=>{
    try{
        const employee = await Employee.findByIdAndDelete(req.params.employeeId);
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        await Company.findByIdAndUpdate(employee.company, {
            $pull: {employees: employee._id}
        });
        res.status(204).json();
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/companies/:companyId/employees', async(req, res)=>{
    try{
        const company = await Company.findById(req.params.companyId).populate('employees');
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.status(200).json(company.employees);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;