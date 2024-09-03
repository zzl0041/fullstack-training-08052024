const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 3000;

const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.listen(port, () => {
  console.log(`Employement Management App is listening at http://localhost:${port}`);
});