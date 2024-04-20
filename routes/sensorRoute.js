const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const sensorValidation = require('../validations/sensorValidation');
const validate = require('../middlewares/validator');

router.post('/sensor-data', validate(sensorValidation.updateSensor), sensorController.updateSensor);
router.get('/sensor-data', sensorController.readSensor);

module.exports = router;