const Employee = require("../models/Employee.js");
const Company = require("../models/Company.js");

const createOneEmployee = async (req, res) => {
  // res.send("create one employee");

  try {
    // check if employee's company in the pool
    const companyId = req.body.company;
    const company = await Company.findById(companyId);
    // if the company not in the pool
    if (!company) {
      res.send("This company does not exit");
    }

    // save employee to employee collection
    const employee = new Employee(req.body);
    await employee.save();

    // save employee to company collection
    company.employees.push(employee._id);
    await company.save();

    // return
    res.status(201).json({ message: "employee created" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server error" });
  }
};

const getAllEmployees = async (req, res) => {
  // res.send("get all employees")
  if (req.hasToken) {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "server error" });
    }
  } else {
    const employees = await Employee.find();
    const record = [];
    employees.forEach((employee) => {
      info = {
        firstName: employee.firstName,
        lastName: employee.lastName,
      };
      record.push(info);
    });
    res.status(200).json(record);
  }
};

const getOneEmployeeById = async (req, res) => {
  // res.send("get one employee by id");

  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server error" });
  }
};

const updateOneEmployeeById = async (req, res) => {
  // res.send("update one employee by id");

  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
      { new: true }
    );
    res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server error" });
  }
};

const deleteOneEmployeeById = async (req, res) => {
  // res.send("delete one employee by id");
  try {
    // console.log(typeof req.params?.id);
    const delEmpId = req.params?.id;
    // delete from employee collection
    const deleteEmployee = await Employee.findByIdAndDelete(delEmpId);
    // console.log(deleteEmployee);

    // delete from company collection
    const companyId = deleteEmployee.company;
    // console.log(`companyId: ${companyId}`);
    const company = await Company.findById(companyId);
    company.employees = company.employees.filter(
      (employeeId) => employeeId.toString() !== delEmpId
    );
    await company.save();

    res.status(204).json({ message: "Employee deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  createOneEmployee,
  getOneEmployeeById,
  getAllEmployees,
  updateOneEmployeeById,
  deleteOneEmployeeById,
};
