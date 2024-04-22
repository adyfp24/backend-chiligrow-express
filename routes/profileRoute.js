const express = require('express');
const router = express.Router();
const { validate } = require('../middlewares/validator');
const userValidation = require('../validations/userValidation');
const { verifyToken } = require('../middlewares/validateToken');
const profileController = require('../controllers/profileController');
const { upload } = require('../middlewares/multer');

router.get('/profile', verifyToken , profileController.getProfile);
router.put('/profile', verifyToken , validate(userValidation.updateProfile), profileController.updateProfile);
router.post('/profile-image', verifyToken , upload.single('file'), profileController.addProfileImage);

module.exports = router;
