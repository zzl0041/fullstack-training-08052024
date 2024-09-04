const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 3000;

const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const authRouter = require('./routers/auth');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);
app.use('/api', authRouter); 

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Employement Management App is listening at http://localhost:${port}`);
});