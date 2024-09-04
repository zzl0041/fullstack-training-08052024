const express = require("express");
const employeeRouter = require("./routers/employees");
const companyRouter = require("./routers/companies");
const authRouter = require("./routers/auth");
const connectDB = require("./db");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", authRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/companies", companyRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
