const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    resigned: {
      type: Boolean,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Company',
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      default: null,
    },
  },
  {
    timestamps: true,
  }
)

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee
