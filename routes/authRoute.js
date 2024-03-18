const express = require('express');
const router = express.Router();
const { userValidationRules, validate } = require('../middlewares/validator')
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');

router.post('/register', registController.register);
router.post('/login', loginController.login);
// router.post('/logout', logoutController);

module.exports = router;