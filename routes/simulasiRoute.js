const express = require('express');
const router = express.Router();
const simulasiController = require('../controllers/simulasiController');

router.get('/simulasi', simulasiController.getAllSimulasi);
router.get('/simulasi/id_simulasi', simulasiController.getSimulasiById);
router.post('/simulasi', simulasiController.createSimulasi);

module.exports = router;