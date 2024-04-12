const JadwalPemupukan = require('../models').JadwalPemupukan;

const cJadwalService = async (dataJadwal) => {
    try {
        const newJadwal = await JadwalPemupukan.create(dataJadwal);
        return newJadwal;
    } catch (error) {
        throw new Error('Failed to create new jadwal pemupukan');
    }
}

const rJadwalService = async (req, res) => {

}

const rAllJadwalService = async (req, res) => {

}

module.exports = {
    cJadwalService,
    rJadwalService,
    rAllJadwalService
}
