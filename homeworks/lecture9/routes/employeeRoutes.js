const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

router.post('/', async (req, res) =>{
    try{
        const employee = new Employee(req.body);
        await employee.save();

        const company = await Company.findById(employee.company);
        company.employees.push(employee._id);
        await company.save();

        res.status(201).json(employee);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.get('/', async(req, res)=>{
    try{
        const employees = await Employee.find().populate('company manager');
        res.json(employees);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', async (req, res) =>{
    try{
        const employee = await Employee.findById(req.params.id).populate('company manager');
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.json(employee);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.put('/:id', async (req, res) =>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.json(employee);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee) return res.status(404).json({error: 'Employee not found'});

        const company = await Company.findById(employee.company);
        company.employees.pull(employee._id);
        await company.save();

        res.json({message: 'Employee deleted'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;