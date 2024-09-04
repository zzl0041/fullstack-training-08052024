const express = require("express");
const connectDB = require("./db");
const employeeRouter = require("./routers/employeeRouter");
const companyRouter = require("./routers/companyRouter");
const authRouter = require("./routers/authRouter");
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/employees", employeeRouter);
app.use("/api/companies", companyRouter);
app.use("/api/login", authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
