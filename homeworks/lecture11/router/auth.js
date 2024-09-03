const express = require('express');

const login = require('../controllers/auth');

const router = express.Router();

// /api/login

router.post('/login', login);

module.exports = router;
