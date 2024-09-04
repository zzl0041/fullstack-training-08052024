const express = require("express");
const router = express.Router();

const {
  createOneCompany,
  getOneCompanyById,
  getAllCompanies,
  getAllEmployeesOfTheCompany,
  updateOneCompanyById,
  deleteOneCompanyById,
} = require("../controllers/companyController");

const authMiddleware = require("../middlewares/authMiddlerware");

// /api/companies
router.get("/", getAllCompanies);

router.get("/:id", getOneCompanyById);

router.get("/:id/employees", authMiddleware, getAllEmployeesOfTheCompany);

router.post("/", createOneCompany);

router.put("/:id", updateOneCompanyById);

router.delete("/:id", deleteOneCompanyById);

module.exports = router;
