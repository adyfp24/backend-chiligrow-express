const express = require('express');
const router = express.Router();
const pemupukanController = require('../controllers/pemupukanController');
const { verifyToken } = require('../middlewares/validateToken');

router.get('/jadwal-pemupukan', pemupukanController.getJadwal);
router.post('/jadwal-pemupukan', verifyToken, pemupukanController.addJadwal);
router.put('/jadwal-pemupukan/{id_jadwal}', pemupukanController.updateJadwal);
router.delete('/jadwal-pemupukan/{id_jadwal}', pemupukanController.deleteJadwal);
router.get('/pemupukan');

module.exports = router;