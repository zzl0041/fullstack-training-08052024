const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  jobTitle: {
    type: String,
    required: true
  },
  resigned: {
    type: Boolean,
    default: false
  },
  salary: {
    type: Number,
    required: true
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    default: null
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
