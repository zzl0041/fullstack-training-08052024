const express = require("express");
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getAllEmployees);

router.get("/:id", getOneEmployee);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
