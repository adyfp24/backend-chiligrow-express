const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/sensor-data', sensorController.updateSensor);
router.get('/sensor-data', sensorController.readSensor);

module.exports = router;