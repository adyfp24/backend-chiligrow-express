const express = require('express');
const router = express.Router();
const pemupukanController = require('../controllers/pemupukanController');
const { verifyToken } = require('../middlewares/validateToken');

router.get('/jadwal-pemupukan', verifyToken, pemupukanController.getJadwal);
router.get('/all-jadwal', verifyToken, pemupukanController.getAllJadwal);
router.post('/jadwal-pemupukan', verifyToken, pemupukanController.addJadwal);
router.put('/jadwal-pemupukan/:id_jadwal', verifyToken, pemupukanController.updateJadwal);
router.delete('/jadwal-pemupukan/:id_jadwal', verifyToken, pemupukanController.deleteJadwal);
router.get('/history');

module.exports = router;