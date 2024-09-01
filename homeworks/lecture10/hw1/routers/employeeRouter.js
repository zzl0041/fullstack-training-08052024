const express = require("express");

const {
  createOneEmployee,
  getAllEmployees,
  getOneEmployeeById,
  updateOneEmployeeById,
  deleteOneEmployeeById,
} = require("../controllers/employeeController");

const router = express.Router();

// /api/employees
router.get("/", getAllEmployees);

router.get("/:id", getOneEmployeeById);

router.post("/", createOneEmployee);

router.put("/:id", updateOneEmployeeById);

router.delete("/:id", deleteOneEmployeeById);

module.exports = router;
