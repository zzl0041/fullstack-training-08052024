const express = require("express");
const {
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getAllEmployeesOfCompany,
} = require("../controllers/company");
const router = express.Router();

router.get("/", getAllCompanies);

router.get("/:id", getOneCompany);

router.post("/", createCompany);

router.put("/:id", updateCompany);

router.delete("/:id", deleteCompany);

router.get("/:id/employees", getAllEmployeesOfCompany);

module.exports = router;
