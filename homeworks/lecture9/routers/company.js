const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.post('/companies', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).send(company);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.get('/companies/:id', async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId).populate('employees');
    if (!company) {
      return res.status(404).send("The company cannot be found.");
    }
    res.status(200).send(company);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/companies/:id', async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findByIdAndUpdate(companyId, req.body, {
      new: true,
      runValidators: true
    });
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/companies/:id', async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findByIdAndDelete(companyId);
    if (!company) return res.status(404).send();
    res.status(200).send(company);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    if (!companies) return res.status(404).send();
    res.send(companies);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;