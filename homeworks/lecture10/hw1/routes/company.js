const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const company = require('../models/company');

router.get('/companies', async (req, res)=>{
    try{
        const companies = await Company.find().populate('employees');
        res.status(200).json(companies);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/companies/:companyId', async (req, res)=>{
    try{
        const company = await Company.findById(req.params.companyId).populate('employees');
        if(!company) res.status(404).json({error: 'Company not found'});
        res.status(200).json(company);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.post('/companies', async (req,res)=>{
    try{
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.put('/companies/:companyId', async (req, res)=>{
    try{
        const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, {new: true});
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.status(200).json(company);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.patch('/companies/:companyId', async(req, res)=>{
    try{
        const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, {new: true});
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.status(200).json(company);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete('/companies/:companyId', async(req, res)=>{
    try{
        const company = await Company.findByIdAndDelete(req.params.companyId);
        if(!company) return res.status(404).json({error: 'Company not found'});
        res.status(204).json();
    }catch (err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;