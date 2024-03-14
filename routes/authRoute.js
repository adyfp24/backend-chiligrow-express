const express = require('express');
const router = express.Router();
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');

router.post('/register', registController.register);
// router.post('/login', loginController);
// router.post('/logout', logoutController);

module.exports = router;