const express = require('express');
const router = express.Router();
const { userValidationRules, validate } = require('../middlewares/validator')
const { verifyToken } = require('../middlewares/validateToken');
const profileController = require('../controllers/profileController');

router.get('/profile', verifyToken , profileController.getProfile);
router.put('/profile', verifyToken , profileController.updateProfile);

module.exports = router;
