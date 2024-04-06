const simulasiService = require('../services/simulasiService');

const createSimulasi = (req, res) => {
    try {
        const {
            luas_lahan,
            jenis_bibit
        } = req.body;
        console.log(luas_lahan);
        console.log(jenis_bibit);
        console.log('----------');
        const jumlah_bibit = luas_lahan / 4;
        const kuantitas_pupuk = jumlah_bibit * 10;
        const debit_air = jumlah_bibit * 8;
        if(jenis_bibit == "rawit"){
            var jenis_pupuk = "pupuk urea";
        }else if(jenis_bibit == "merah"){
            var jenis_pupuk = "pupuk kompos";
        };
        const dataSimulasi = {
            luas_lahan,
            jenis_bibit,
            jumlah_bibit,
            kuantitas_pupuk,
            debit_air,
            jenis_pupuk
        };
        console.log('luas lahan :', luas_lahan, 'meter');
        console.log('jumlah bibit :', jumlah_bibit, 'bibit');
        console.log('kuantitas pupuk :', kuantitas_pupuk, 'kg');
        console.log('debit air :', debit_air, 'liter');
        console.log('jenis pupuk :', jenis_pupuk);
        console.log('jenis bibit :', jenis_bibit);
        res.status(200).json({ success: true, message:"data simulasi berhasil dbuat", data:dataSimulasi});
    } catch (error) {
        
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