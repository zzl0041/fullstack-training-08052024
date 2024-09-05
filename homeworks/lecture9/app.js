const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();
app.use(express.json());
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://root:Hzpeng527@terencelincluster0.ppmro.mongodb.net/';

mongoose.connect(mongoURI)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log(err));

app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/testRoutes', testRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log('running on port ${PORT}'));