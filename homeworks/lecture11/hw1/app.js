const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const companyRoutes = require("./routes/companies");
const employeeRoutes = require("./routes/employees");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/companies", companyRoutes);

mongoose
  .connect("mongodb://localhost:27017/company_employee_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(3000, () => console.log("Server is running on port 3000"));
