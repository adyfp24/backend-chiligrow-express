const pemupukanService = require('../services/pemupukanService');

const pompaOn = () => {

}

const pompaOf = () => {
    
}

const getJadwal = async (req, res) => {
    try {
        const user_id = req.user.id_user;
        const dataJadwal = await pemupukanService.rJadwalService(user_id);
        if(dataJadwal){
            res.status(200).json({
                success: true,
                message: 'Jadwal pemupukan tersedia',
                data: dataJadwal
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'Jadwal pemupukan gagal dimuat',
                data: null
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server',
        });
    }
}

const addJadwal = async (req, res) => {
    try {
        const user_id = req.user.id_user;
        const {
            selang_hari,
            selang_jam
        } = req.body;
        const dataJadwal = {
            selang_hari, 
            selang_jam,
            user_id
        }
        const newJadwal = await pemupukanService.cJadwalService(dataJadwal);
        if(newJadwal){
            pemupukanService.scheduleTask(selang_hari, selang_jam);
            res.status(201).json({
                success: true,
                message: 'Jadwal pemupukan berhasil ditambahkan',
                data: newJadwal
            });
        }else{
            res.status(401).json({
                success: false,
                message: 'Jadwal pemupukan gagal ditambahkan',
                data: null
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server',
        });
    }
};

const deleteJadwal = () => {

}

const updateJadwal = () => {

}

module.exports = {
    pompaOf,
    pompaOn,
    getJadwal,
    addJadwal,
    deleteJadwal,
    updateJadwal
}