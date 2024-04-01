const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/api/v1/sensor-data', sensorController.updateSensor);
router.get('/api/v1/sensor-data', sensorController.readSensor);

module.exports = router;