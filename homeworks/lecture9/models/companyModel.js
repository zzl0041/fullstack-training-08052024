const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    headquarters: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    employees: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Employee',
    }],
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', companySchema)

module.exports = Company
