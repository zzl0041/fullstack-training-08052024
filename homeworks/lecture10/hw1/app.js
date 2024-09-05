const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/company-employee-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
const companiesRoute = require("./routes/companies");
const employeesRoute = require("./routes/employees");

app.use("/companies", companiesRoute);
app.use("/employees", employeesRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
