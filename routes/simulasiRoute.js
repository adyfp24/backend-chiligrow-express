const express = require('express');
const router = express.Router();
const simulasiController = require('../controllers/simulasiController');
const { verifyToken } = require('../middlewares/validateToken');

router.post('/simulasi', verifyToken, simulasiController.createSimulasi);

module.exports = router;