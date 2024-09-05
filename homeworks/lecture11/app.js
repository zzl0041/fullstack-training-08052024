const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Company = require('./models/company');
const Employee = require('./models/employee');
const User = require('./models/user');

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGODB_URI = 'mongodb+srv://root:Hzpeng527@terencelincluster0.ppmro.mongodb.net/'
// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const JWT_SECRET = 'terence_lin'
// Middleware for authentication
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Failed to authenticate token' });

    req.userId = decoded.id;
    next();
  });
};

// Routes

// Login route
app.post('/api/login', async (req, res) => {
  const { firstName, lastName, password } = req.body;

  const user = await User.findOne({ firstName, lastName });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
//   console.log(user.password);
//   console.log(password)
//  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Create a new company
app.post('/api/companies', authenticate, async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new employee
app.post('/api/employees', authenticate, async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a company by id
app.get('/api/companies/:id', authenticate, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get an employee by id
app.get('/api/employees/:id', authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company');
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // Assuming that user can only view their own company's employees
    const user = await User.findById(req.userId);
    const company = await Company.findById(employee.company);

    if (company && company._id.toString() !== user.company.toString()) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a company by id
app.put('/api/companies/:id', authenticate, async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee by id
app.put('/api/employees/:id', authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // Ensure that user can only update their own company's employees
    const user = await User.findById(req.userId);
    const company = await Company.findById(employee.company);

    if (company && company._id.toString() !== user.company.toString()) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    Object.assign(employee, req.body);
    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a company by id
app.delete('/api/companies/:id', authenticate, async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee by id
app.delete('/api/employees/:id', authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    // Ensure that user can only delete their own company's employees
    const user = await User.findById(req.userId);
    const company = await Company.findById(employee.company);

    if (company && company._id.toString() !== user.company.toString()) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await employee.remove();
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all companies
app.get('/api/companies', authenticate, async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
app.get('/api/employees', authenticate, async (req, res) => {
  try {
    const employees = await Employee.find().select('firstName lastName');
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees of a company
app.get('/api/companies/:id/employees', authenticate, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    const user = await User.findById(req.userId);
    if (company._id.toString() !== user.company.toString()) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const employees = await Employee.find({ company: company._id });
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
