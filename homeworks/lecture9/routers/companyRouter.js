const express = require("express");

const {
  createOneCompany,
  getOneCompanyById,
  getAllCompanies,
  getAllEmployeesOfTheCompany,
  updateOneCompanyById,
  deleteOneCompanyById,
} = require("../controllers/companyController");

const router = express.Router();

// /api/companies
router.get("/", getAllCompanies);

router.get("/:id", getOneCompanyById);

router.get("/:id/employees", getAllEmployeesOfTheCompany);

router.post("/", createOneCompany);

router.put("/:id", updateOneCompanyById);

router.delete("/:id", deleteOneCompanyById);

module.exports = router;
