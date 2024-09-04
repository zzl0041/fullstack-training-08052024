const express = require("express");
const employeeRouter = require("./routers/employees");
const companyRouter = require("./routers/companies");
const connectDB = require("./db");
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/employees", employeeRouter);
app.use("/api/companies", companyRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
