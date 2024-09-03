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
    required: true
  },
  jobTitle: {
    type: String,
    default: 'No Title'
  },
  resigned: {
    type: Boolean,
    default: null
  },
  salary: {
    type: Number,
    default: null
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;