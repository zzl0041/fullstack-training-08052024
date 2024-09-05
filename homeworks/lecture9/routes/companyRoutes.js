const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const Employee = require('../models/employee');
const company = require('../models/company');

router.post('/',async(req, res)=>{
    try{
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const companies = await Company.find();
        res.json(companies);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const company = await Company.findById(req.params.id);
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.json(company);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try{
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.json(company);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete('/:id', async (req,res)=>{
    try{
        const company = await Company.findByIdAndDelete(req.params.id);
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.json({message: 'Company deleted'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/:id/employees', async (req, res)=>{
    try{
        const company = await Company.findById(req.params.id).populate('employees');
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.json(company.employees);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;