const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  headquarters: { type: String, required: true },
  industry: { type: String, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
