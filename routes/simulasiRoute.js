const express = require('express');
const router = express.Router();
const simulasiController = require('../controllers/simulasiController');

router.post('/simulasi', simulasiController.createSimulasi);

module.exports = router;