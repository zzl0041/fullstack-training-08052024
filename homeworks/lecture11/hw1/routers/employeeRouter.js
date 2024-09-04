const express = require("express");
const router = express.Router();

const {
  createOneEmployee,
  getAllEmployees,
  getOneEmployeeById,
  updateOneEmployeeById,
  deleteOneEmployeeById,
} = require("../controllers/employeeController");

const authMiddleware = require("../middlewares/authMiddlerware");

// /api/employees
router.get("/", authMiddleware, getAllEmployees);

router.get("/:id", getOneEmployeeById);

router.post("/", createOneEmployee);

router.put("/:id", updateOneEmployeeById);

router.delete("/:id", deleteOneEmployeeById);

module.exports = router;
