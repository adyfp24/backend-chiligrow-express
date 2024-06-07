const HasilSimulasi = require('../models/').HasilSimulasi;
const JenisBibit = require('../models').JenisBibit;


const save = async (id_user, data) => {
    try {
        const { jenis_bibit, ...remainingData } = data;
        const bibit = await JenisBibit.findOne({ where: { jenis_bibit: jenis_bibit } });
        if (!bibit) {
            throw new Error('Jenis bibit tidak ditemukan');
        }
        const saveResult = await HasilSimulasi.create({
            ...remainingData,
            jenis_bibit_id: bibit.id_jenis_bibit,
            user_id: id_user
        });
        if (saveResult) {
            return true;
        } else {
            throw new Error('Gagal menyimpan data');
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};

const getResult = (luas_lahan, jenis_bibit) => {

    let jumlah_bibit, kuantitas_pupuk, pupuk_urea, pupuk_npk, volume_air;

    if (jenis_bibit == "rawit") {
        jumlah_bibit = luas_lahan / 0.3;
        kuantitas_pupuk = jumlah_bibit * 160 / 1000000 * 90;
        pupuk_urea = kuantitas_pupuk / 2;
        pupuk_npk = kuantitas_pupuk / 2;
        volume_air = jumlah_bibit * 100 / 1000 * 90;
    } else if (jenis_bibit == "merah") {
        jumlah_bibit = luas_lahan / 0.2;
        kuantitas_pupuk = jumlah_bibit * 160 / 1000000 * 90;
        pupuk_urea = kuantitas_pupuk / 2;
        pupuk_npk = kuantitas_pupuk / 2;
        volume_air = jumlah_bibit * 100 / 1000 * 90;
    };

    const dataSimulasi = {
        luas_lahan,
        jenis_bibit,
        jumlah_bibit,
        kuantitas_pupuk,
        pupuk_npk,
        pupuk_urea,
        volume_air
    };

    return dataSimulasi
};


module.exports = {
    save,
    getResult,
};