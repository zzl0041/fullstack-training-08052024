const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();

// Universal handler for all methods and actions related to companies
router.use((req, res) => {
  const { method, query } = req;
  const action = query.action;

  // Handle GET requests
  if (method === 'GET') {
    if (action === 'getAll') {
      companyController.getAllCompanies(req, res);
    } else if (action === 'getById') {
      companyController.getCompanyById(req, res);
    } else if (action === 'getEmployees') {
      companyController.getEmployeesOfCompany(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  }

  // Handle POST requests
  else if (method === 'POST') {
    if (action === 'create') {
      companyController.createCompany(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  }

  // Handle PUT requests
  else if (method === 'PUT') {
    if (action === 'update') {
      companyController.updateCompany(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  }

  // Handle DELETE requests
  else if (method === 'DELETE') {
    if (action === 'delete') {
      companyController.deleteCompany(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
});

module.exports = router;
