const express = require('express');
const router = express.Router();
const pemupukanController = require('../controllers/pemupukanController');
const { verifyToken } = require('../middlewares/validateToken');
const {validate} = require('../middlewares/validator');
const pemupukanValidation = require('../validations/jadwalValidation');

router.get('/jadwal-pemupukan', verifyToken, pemupukanController.getJadwal);
router.get('/all-jadwal', verifyToken, pemupukanController.getAllJadwal);
router.post('/jadwal-pemupukan', verifyToken, validate(pemupukanValidation.createJadwal), pemupukanController.addJadwal);
router.put('/jadwal-pemupukan/:id_jadwal', verifyToken, validate(pemupukanValidation.updateJadwal), pemupukanController.updateJadwal);
router.delete('/jadwal-pemupukan/:id_jadwal', verifyToken, pemupukanController.deleteJadwal);
router.get('/riwayat-pemupukan', verifyToken, pemupukanController.getHistory);
router.get('/pemupukan-status', pemupukanController.getPumpStatus);
router.get('/riwayat-pemupukan', verifyToken, pemupukanController.getHistory);

module.exports = router;

