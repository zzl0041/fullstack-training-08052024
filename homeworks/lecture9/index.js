const express = require('express');
const mongoose = require('mongoose');
const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
require('dotenv').config();

port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(companyRouter);
app.use(employeeRouter);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect.', err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Running on ${port}`);
});