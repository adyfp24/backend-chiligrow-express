const pemupukanService = require('../services/pemupukanService');
const nodeSchedule = require('node-schedule');

const pompaOn = () => {

}

const pompaOf = () => {
    
}

const getJadwal = () => {

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
            res.status(201).json({
                success: true,
                message: 'Jadwal pemupukan berhasil ditambahkan',
                data: newJadwal
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