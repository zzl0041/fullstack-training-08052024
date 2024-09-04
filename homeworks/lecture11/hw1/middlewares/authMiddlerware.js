const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  if (!token) {
    // return res.status(401).json({ message: "No token, authorization denied" });
    res.hasToken = false;
    // console.log("has not token");

    return next();
  }

  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded.user;
    // console.log(`req.user.employeeId: ${req.user.employeeId}`);
    // console.log(`req.user.company: ${req.user.company}`);
    // console.log(`has token: ${token}`);
    req.hasToken = true;
    // console.log(`has token: ${req.hasToken}`);
    next();
  } catch (err) {
    res.hasToken = false;
    // console.log("has not token!!!");
    return next();
  }
};
