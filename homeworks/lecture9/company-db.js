const mongoose = require('mongoose');
const { Company } = require('./schema')


// - Create a new company
const company = new Company({
    name:'Alibaba',
    description:'This is a online business company',
    headquarters:'Ma yun',
    industry:'Internet',
    employees:[]
})
company
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
const companyID = new mongoose.Types.ObjectId('66d8bf68ee9a92a94ba58873');
Company.findById(companyID)
.then((company)=>{
    console.log('find')
    console.log(company)
})
.catch((err)=>{
    console.log(err)
})
.finally(() => {
    mongoose.disconnect();
  });


// - Update a company by id
const id = new mongoose.Types.ObjectId('66d8bf68ee9a92a94ba58873')
Company.findByIdAndUpdate(id,{
    headquarters:"jiang fan"
}).then((company)=>{
    console.log(company)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

// - Delete a company by id
Company.findByIdAndDelete(id)
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
Company.find()
.then(companys=>{
    console.log(companys)
})
.catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

