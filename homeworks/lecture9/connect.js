const mongoose = require('mongoose');
require('dotenv').config();


mongoose
    .connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('connected to MongoDB')
    })
    .catch(err=>{
        console.log('ERROR connecting to MONGODB', err)
    })