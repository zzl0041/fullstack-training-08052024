const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 3000;

const companyRouter = require('./router/company');
const employeeRouter = require('./router/employee');
const loginRouter = require('./router/auth');

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);
app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`HW1 app is listening at http://localhost:${port}`);
});
