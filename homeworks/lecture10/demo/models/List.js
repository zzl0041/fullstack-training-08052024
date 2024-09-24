const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    todo: {type: String, require: true},
    done: {type: Boolean, require: true, default: false}
});


const List = mongoose.model('List', ListSchema);
module.exports = List;