const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const authValidation = require('../validations/authValidation');
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');

router.post('/register', validate(authValidation.registUser), registController.register);
router.post('/login', validate(authValidation.loginUser), loginController.login);
router.post('/logout', logoutController.logout);

module.exports = router;