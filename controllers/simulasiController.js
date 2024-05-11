const simulasiService = require('../services/simulasiService');

const createSimulasi = async (req, res) => {
    try {
        const id_user = req.user.id_user;
        const {
            luas_lahan,
            jenis_bibit
        } = req.body;

        const hasilSimulasi = simulasiService.getResult(luas_lahan, jenis_bibit);
       
        const saveSimulasiData = await simulasiService.save(id_user, hasilSimulasi);
        if(saveSimulasiData){
            res.status(200).json({ 
                success: true, 
                message:"Data simulasi berhasil dibuat", 
                data: hasilSimulasi
            });
        } else{
            res.status(400).json({ 
                success: false, 
                message:"Data simulasi gagal dibuat", 
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    createSimulasi,
}
