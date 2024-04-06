const express = require('express');
const router = express.Router();
const { userValidationRules, validate } = require('../middlewares/validator')
const { verifyToken } = require('../middlewares/validateToken');
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');
const meController = require('../controllers/auth/meController');

router.post('/register', registController.register);
router.post('/login', loginController.login);
router.post('/logout', logoutController.logout);
router.get('/profile', verifyToken ,meController.profile);

module.exports = router;