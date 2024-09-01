const Company = require("../models/Company");
const Employee = require("../models/Employee");

const createOneCompany = async (req, res) => {
  //   res.send("create one company");
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllCompanies = async (req, res) => {
  //   res.send("get all companies");
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneCompanyById = async (req, res) => {
  //   res.send("get one company by id");
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllEmployeesOfTheCompany = async (req, res) => {
  //   res.send("get all employees of the company");
  try {
    const company = await Company.findById(req.params?.id);
    const employees = company.employees;
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateOneCompanyById = async (req, res) => {
  //   res.send("update one company by id");
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOneCompanyById = async (req, res) => {
  //   res.send("delete one company by id");
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createOneCompany,
  getOneCompanyById,
  getAllCompanies,
  getAllEmployeesOfTheCompany,
  updateOneCompanyById,
  deleteOneCompanyById,
};
