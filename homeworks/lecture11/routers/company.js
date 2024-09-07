const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const { authenticateToken } = require('../utils/auth');

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

router.patch('/companies/:id', authenticateToken, async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!company) {
      return res.status(404).send("The company cannot be found.");
    }
    res.status(200).send(company);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/companies/:id', authenticateToken, async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).send("The company cannot be found.");
    }
    res.status(200).send(company);
  } catch (err) {
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