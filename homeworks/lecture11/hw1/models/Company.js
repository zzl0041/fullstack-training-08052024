const mongoose = require("mongoose");
// const Employee = require("./Employee");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  headquarters: {
    type: String,
    require: true,
  },
  industry: {
    type: String,
    require: true,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
