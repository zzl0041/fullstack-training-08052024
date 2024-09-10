const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    company:{
        type:Schema.Types.ObjectId,
        ref:'Company'
    },
    startDate:{
        type:Date,
        required:true
    },
    jobTitle:{
        type:String,
        required: true
    },
    resigned:{
        type: Boolean,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    manager:{
        type:Schema.Types.ObjectId,
        ref: 'Employee'
    }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {
    Employee
}