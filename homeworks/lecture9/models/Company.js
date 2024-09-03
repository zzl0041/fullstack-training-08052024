const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No Description'
  },
  headquarters: {
    type: String,
    default: 'Unknown'
  },
  industry: {
    type: String,
    default: 'Unknown'
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    default: []
  }]
}, { timestamps: true } );

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
