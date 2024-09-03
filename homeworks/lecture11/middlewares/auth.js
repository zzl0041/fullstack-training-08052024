const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = async (req, res, next) => {
  const token =
    req.header('x-auth-token') ||
    req.header?.authorization?.match(/^Bearer (.+)/)[1];

  if (!token) {
    req.haveToken = false;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.haveToken = true;
    req.employee = decoded.employee;

    next();
  } catch (err) {
    req.haveToken = false;
    return next();
  }
};
