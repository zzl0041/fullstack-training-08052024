const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: 'company' },
  startDate: Date,
  jobTitle: String,
  resigned: { type: Boolean, default: false },
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'employee', default: null }
});

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;