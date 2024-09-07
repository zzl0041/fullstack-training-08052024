const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


function generateToken(employee) {
  return jwt.sign({ id: employee._id, company: employee.company }, JWT_SECRET, {
    expiresIn: '1h',
  });
}


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticateToken };
