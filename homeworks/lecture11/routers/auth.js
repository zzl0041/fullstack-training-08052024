const express = require("express");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const CustomAPIError = require("../errors");
const router = express.Router();

// /api/login
router.post("/login", async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    let user = await Employee.findOne({ firstName });
    if (!user) {
      throw new CustomAPIError("User not found", 400);
    }
    if (user.lastName !== lastName) {
      throw new CustomAPIError("Invalid Credentials", 400);
    }
    const payload = {
      user: {
        id: user._id,
        companyId: user.companyId,
      },
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
