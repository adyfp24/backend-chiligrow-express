const simulasiService = require('../services/simulasiService');

const createSimulasi = (req, res) => {
    try {
        const {
            luas_lahan,
            jenis_bibit
        } = req.body;

        const hasilSimulasi = simulasiService.getResult(luas_lahan, jenis_bibit);
       
        // const saveSimulasiData = simulasiService.createService(dataSimulasi);
        res.status(200).json({ 
            success: true, 
            message:"data simulasi berhasil dbuat", 
            data: hasilSimulasi
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

const getAllSimulasi = () => {

}

const getSimulasiById = () => {

}  

module.exports = {
    createSimulasi,
    getAllSimulasi,
    getSimulasiById
}