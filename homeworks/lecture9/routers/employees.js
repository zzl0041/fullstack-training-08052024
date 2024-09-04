const express = require("express");
const {
  getAllEmployees,
  getOneEmployee,
  getAllEmployeesOfCompany,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee");
const router = express.Router();

router.get("/", getAllEmployees);

router.get("/:id", getOneEmployee);

router.get("/company/:companyId", getAllEmployeesOfCompany);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
