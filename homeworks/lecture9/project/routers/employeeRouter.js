const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

router.use((req, res) => {
    const { method, query } = req;
    const action = query.action;
  
if (method === 'GET') {
    if (action === 'getAll') {
      employeeController.getAllEmployees(req, res);
    } else if (action === 'getById') {
      employeeController.getEmployeeById(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } else if (method === 'POST') {
    const action = req.query.action;
    if (action === 'create') {
      employeeController.createEmployee(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } else if (method === 'PUT') {
    const action = req.query.action;
    if (action === 'update') {
      employeeController.updateEmployee(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } else if (method === 'DELETE') {
    const action = req.query.action;
    if (action === 'delete') {
      employeeController.deleteEmployee(req, res);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
});

module.exports = router;
