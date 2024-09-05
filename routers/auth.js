const express = require('express')
const jwt = require('jsonwebtoken')
const Employee = require('../models/Employee')
const CustomerAPIError = require('../errors')
const router = express.Router()

router.post('/login', async(req,res,next) =>{
    try { 
        const {firstName, lastName} = req.body
        let employee = await Employee.findOne({firstName})
        if(!employee){
            throw new CustomerAPIError('INVALID CREDENTIALS', 400);
        }
        if(employee.lastName != lastName){
            return res.status(400).json({message:"INVALID CREDENTIALS"})
        }
        const payload = {
            employee:{
                id: employee._id
            }
        }
        const token = await jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'30d'
        })
        res.json({token})
        
    }catch(err){
        next(err)
    }
})
