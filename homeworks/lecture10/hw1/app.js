const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(e=>{
    console.error(e);
})

const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');

app.use(companyRoutes);
app.use(employeeRoutes);

app.get('/', (req, res)=>{
    res.send('API is running');
});

app.listen(PORT, ()=>{
    console.log('running on ${PORT}');
})