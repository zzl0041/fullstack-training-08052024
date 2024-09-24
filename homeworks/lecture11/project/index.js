require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
const authRouter = require('./routers/authRouter');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// API routes
app.use('/api', authRouter);
app.use('/companies', companyRouter);
app.use('/employees', employeeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
