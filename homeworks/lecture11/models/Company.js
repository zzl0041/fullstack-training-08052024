// The Company schema should have the following fields:

// - name: String
// - description: String
// - headquarters: String
// - industry: String
// - _employees: [EmployeeSchema]_

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  headquarters: String,
  industry: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      default: []
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
