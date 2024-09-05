const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/company_employee_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Company = require("./models/Company");
const Employee = require("./models/Employee");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// - Create a new company
app.post("/companies", async (req, res) => {
  const { name, description, headquarters, industry } = req.body;
  const company = new Company({ name, description, headquarters, industry });
  await company.save();
  res.status(201).json(company);
});

// - Create a new employee
app.post("/employees", async (req, res) => {
  const {
    firstName,
    lastName,
    companyId,
    startDate,
    jobTitle,
    salary,
    managerId,
  } = req.body;
  const company = await Company.findById(companyId);
  if (!company) return res.status(404).json({ message: "Company not found" });

  const employee = new Employee({
    firstName,
    lastName,
    company: company._id,
    startDate,
    jobTitle,
    salary,
    manager: managerId || null,
  });

  await employee.save();
  company.employees.push(employee._id);
  await company.save();

  res.status(201).json(employee);
});

// - Get a company by id
app.get("/companies/:id", async (req, res) => {
  const company = await Company.findById(req.params.id).populate("employees");
  if (!company) return res.status(404).json({ message: "Company not found" });
  res.json(company);
});

// - Get an employee by id
app.get("/employees/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id)
    .populate("company")
    .populate("manager");
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

// - Update a company by id
app.put("/companies/:id", async (req, res) => {
  const { name, description, headquarters, industry } = req.body;
  const company = await Company.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      headquarters,
      industry,
    },
    { new: true }
  );
  if (!company) return res.status(404).json({ message: "Company not found" });
  res.json(company);
});

// - Update an employee by id
app.put("/employees/:id", async (req, res) => {
  const { firstName, lastName, jobTitle, salary, resigned, managerId } =
    req.body;
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      firstName,
      lastName,
      jobTitle,
      salary,
      resigned,
      manager: managerId || null,
    },
    { new: true }
  );
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

// - Delete a company by id
app.delete("/companies/:id", async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  if (!company) return res.status(404).json({ message: "Company not found" });

  // Optionally delete all employees related to this company
  await Employee.deleteMany({ company: company._id });

  res.status(204).end();
});

// - Delete an employee by id
app.delete("/employees/:id", async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) return res.status(404).json({ message: "Employee not found" });

  const company = await Company.findById(employee.company);
  if (company) {
    company.employees.pull(employee._id);
    await company.save();
  }

  res.status(204).end();
});

// - Get all companies
app.get("/companies", async (req, res) => {
  const companies = await Company.find().populate("employees");
  res.json(companies);
});

// - Get all employees
app.get("/employees", async (req, res) => {
  const employees = await Employee.find()
    .populate("company")
    .populate("manager");
  res.json(employees);
});

// - Get all employees of a company
app.get("/companies/:id/employees", async (req, res) => {
  const company = await Company.findById(req.params.id).populate("employees");
  if (!company) return res.status(404).json({ message: "Company not found" });
  res.json(company.employees);
});
