const mongoose = require('mongoose');
const company = require('./company');

const EmployeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}
});

module.exports = mongoose.model('Employee', EmployeeSchema);