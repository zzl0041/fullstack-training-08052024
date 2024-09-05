const express = require("express");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secret_key", {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.error("Error during login:", err); // Log the actual error details
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/test", (req, res) => {
  res.send("Auth route is working!");
});

module.exports = router;
