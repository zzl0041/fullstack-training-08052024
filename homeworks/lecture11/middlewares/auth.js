const jwt = require("jsonwebtoken");
const { rawListeners } = require("../models/Employee");

module.exports = async (req, res, next) => {
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];
  if (!token) {
    // return res.status(401).json({ message: "No token, authorization denied" });
    req.user = null;
    return next();
  }
  try {
    // verify
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
