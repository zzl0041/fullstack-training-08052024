// The Employee schema should have the following fields:

// - firstName: String
// - lastName: String
// - company: CompanySchema
// - startDate: Date
// - jobTitle: String
// - resigned: Boolean
// - salary: Number
// - _manager: EmployeeSchema_ (optional)

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
