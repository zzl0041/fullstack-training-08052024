const Employee = require('../models/Employee')


const createEmployee = async (req,res)=> {
    try{
        const employee = new Employee(req.body)
        await employee.save()
        res.status(201).json({message:'company saved'})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message:"server error"})
    }
}

const findEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params?.id)
        if(!employee){
            res.status(400).json({message:"not found employee"})
        }
        if (req.user) {
            return res.status(200).json(employee); 
        } else {
            return res.status(200).json({
                firstName: employee.firstName,
                lastName: employee.lastName
            });  
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}

const findAllEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}

const findAllEmployeesOfSameCompany = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params?.id)
        const companyName = employee.company
        const company = await Company.find({name: companyName})
        const employees = company.employees

        res.status(200).json(employees)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}


const updateEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params?.id)
        employee.firstName = req.body.firstName?? employee.firstName
        employee.lastName = req.body.lastName?? employee.lastName
        employee.salary = req.body.salary?? employee.salary
        
        await employee.save()
        res.json(employee)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}


const deleteEmployee = async(req,res)=>{
    try{
       const employee = await Employee.findByIdAndDelete(req.params?.id)
       res.status(204).json({message:"employee deleted"})
      
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'server failed'})
    }
}


module.exports = {
    createEmployee,
    findEmployee,
    findAllEmployees,
    findAllEmployeesOfSameCompany,
    updateEmployee,
    deleteEmployee
}
