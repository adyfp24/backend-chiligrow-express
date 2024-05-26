const pemupukanService = require('../services/pemupukanService');

const getHistory = async (req, res) => {
    try {
        const user_id = req.user.id_user;
        const dataHistory = await pemupukanService.rAllHistory(user_id) 
        if (dataHistory) {
            res.status(200).json({
                success: true,
                message: 'riwayat pemupukan tersedia',
                data: dataHistory
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'riwayat pemupukan tidak tersedia',
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

const getJadwal = async (req, res) => {
    try {
        const user_id = req.user.id_user;
        const dataJadwal = await pemupukanService.rJadwalService(user_id);
        if (dataJadwal) {
            res.status(200).json({
                success: true,
                message: 'Jadwal pemupukan tersedia',
                data: dataJadwal
            });
        } else {
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

const getAllJadwal = async (req, res) => {
    try {
        const user_id = req.user.id_user;
        const allDataJadwal = await pemupukanService.rAllJadwalService(user_id);
        if (allDataJadwal) {
            res.status(200).json({
                success: true,
                message: 'Jadwal pemupukan tersedia',
                data: allDataJadwal
            });
        } else {
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
        if (newJadwal) {
            pemupukanService.scheduleTask(selang_hari, selang_jam, user_id);
            res.status(201).json({
                success: true,
                message: 'Jadwal pemupukan berhasil ditambahkan',
                data: newJadwal
            });
        } else {
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

const deleteJadwal = async (req, res) => {
    try {
        const id_jadwal = req.params.id_jadwal;
        const deletedJadwal = await pemupukanService.dJadwalService(id_jadwal);
        if (deletedJadwal != 0) {
            res.status(200).json({
                success: true,
                message: 'Data jadwal berhasil dihapus',
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'data jadwal gagal dihapus',
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

const updateJadwal = async (req, res) => {
    try {
        const id_jadwal = req.params.id_jadwal;
        const updatedData = { selang_hari, selang_jam } = req.body;

        const updatedJadwal = await pemupukanService.uJadwalService(id_jadwal, updatedData);

        if (updatedJadwal != 0) {
            res.status(200).json({
                success: true,
                message: 'Data jadwal berhasil diperbarui',
                data: updatedData,
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'data jadwal gagal diupdate',
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

const getPumpStatus = async (req, res) => {
    try {
        const pumpStatus = await pemupukanService.rPumpService(5);
        if (pumpStatus != null) {
            res.status(200).json({
                success: true,
                message: 'status pompa berhasil didapat',
                data: {
                    status: pumpStatus
                },
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'status pompa gagal didapat',
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

module.exports = {
    getJadwal,
    getAllJadwal,
    addJadwal,
    deleteJadwal,
    updateJadwal,
    getHistory,
    getPumpStatus
}