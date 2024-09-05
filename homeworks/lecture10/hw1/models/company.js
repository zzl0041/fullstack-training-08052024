const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    headquarters: {type: String, required: true},
    industry: {type: String, required: true},
    employee: [{type: Schema.Types.ObjectId, ref: 'Employee'}]
});
module.exports = mongoose.model('Company', CompanySchema);