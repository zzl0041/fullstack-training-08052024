const express = require("express");
const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const CustomAPIError = require("../errors");
const router = express.Router();

// api/login
router.post("/", async (req, res, next) => {
  try {
    // res.send("auth login");
    const { username: firstName, password } = req.body;

    const user = await Employee.findOne({ firstName });

    if (!user) {
      throw new CustomAPIError("User cannot be found", 400);
    }

    if (user.lastName !== password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = {
      user: {
        employeeId: user._id,
        company: user.company,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.json({ token });
  } catch (err) {
    console.log(err.message);
    next(err);
    // res.status(500).json({ message: err.message });
  }
});

module.exports = router;
