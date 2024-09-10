const Company = require('../models/Company')

const createCompany = async (req,res)=> {
    try{
        const company = new Company(req.body)
        await company.save()
        res.status(201).json({message:'company saved'})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message:"server error"})
    }
}

const findCompany = async(req,res)=>{
    try{
        const company = await Company.findById(req.params?.id)
        res.status(200).json(company)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}

const findAllCompany = async(req,res)=>{
    try{
        const companies = await Company.find()
        res.status(200).json(companies)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}


const updateCompany = async(req,res)=>{
    try{
        const company = await Company.findById(req.params?.id)
        company.name = req.body.name?? company.name
        company.headquarters = req.body.headquarters?? company.headquarters
        
        await company.save()
        res.json(company)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}


const deleteCompany = async(req,res)=>{
    try{
       const company = await Company.findByIdAndDelete(req.params?.id)
       res.status(204).json({message:"company deleted"})
      
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'server failed'})
    }
}


module.exports = {
    createCompany,
    findCompany,
    findAllCompany,
    updateCompany,
    deleteCompany
}