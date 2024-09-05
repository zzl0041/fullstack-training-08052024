const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req,res,next)=>{
    const token = req.header('x-auth-token') || req.headers? authorized?.match(/^Bearer(.+)/)[1];
    if(!token){
        return res.status(401).json({message:'no token,authorization denied'})
    }
    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    }catch(err){
        res.status(401).json({msg:"token is not valid"})
    }
}