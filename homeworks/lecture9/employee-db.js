const mongoose = require('mongoose');
const { Employee } = require('./schema')


// - Create a new employee
const employee = new Employee({
    firstName: 'echo',
    lastName: 'chen',
    company: 'alibaba',
    startDate: '2021-10-01',
    jobTitle:'software engineer',
    resigned: false,
    salary:8000,
    manager:{}
})

employee
.save()
.then((res)=>{
    console.log('saved')
})
.catch((error)=>{
    console.error(error)
})
.finally(()=>{
    // mongoose.connection.close();
})


// - Get a company by id
// objectId(66d8bf68ee9a92a94ba58873)
const employeeID = new mongoose.Types.ObjectId('r54d8b4268ee9a9daea4532');
Employee.findById(employeeID)
.then((employee)=>{
    console.log('find')
    console.log(employee)
})
.catch((err)=>{
    console.log(err)
})
.finally(() => {
    mongoose.disconnect();
  });


// - Update a company by id
const id = new mongoose.Types.ObjectId('r54d8b4268ee9a9daea4532')
Employee.findByIdAndUpdate(id,{
    salary: 10000
}).then((employee)=>{
    console.log(employee)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

// - Delete a company by id
Employee.findByIdAndDelete(id)
.then(()=>{
    console.log('delete')
})
.catch(err=>{
    console.log(err)
})
.finally(()=>{
    console.log('finally')
})

// Get all companies
Employee.find()
.then(employees=>{
    console.log(employees)
})
.catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

// get all employees from a company
const CompanyId = new mongoose.Types.ObjectId('66d8bf68ee9a92a94ba58873')
Employee.find({company: CompanyId})
.then(employees=>{
    console.log(employees)
})
.catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})
