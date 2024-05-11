const HasilSimulasi = require('../models/').HasilSimulasi;
const JenisBibit = require('../models').JenisBibit;

const save = async (id_user, data) => {
    const { jenis_bibit, ...remainingData } = data;
    const bibit_id = await JenisBibit.findOne({ where: { jenis_bibit: jenis_bibit } }).jenis_bibit_id;
    const saveResult = await HasilSimulasi.create({
        ...remainingData,
        jenis_bibit_id: bibit_id,
        user_id: id_user
    })
    if(saveResult){
        return true
    }else{
        return false
    } 
}

const getResult = (luas_lahan, jenis_bibit) => {

    let jumlah_bibit, kuantitas_pupuk, pupuk_urea, pupuk_npk, volume_air;

    if (jenis_bibit == "rawit") {
        jumlah_bibit = luas_lahan / 4;
        kuantitas_pupuk = jumlah_bibit * 8;
        pupuk_urea = kuantitas_pupuk / 1;
        pupuk_npk = kuantitas_pupuk / 2;
        volume_air = jumlah_bibit * 8;
    } else if (jenis_bibit == "merah") {
        jumlah_bibit = luas_lahan / 3;
        kuantitas_pupuk = jumlah_bibit * 10;
        pupuk_urea = kuantitas_pupuk / 2;
        pupuk_npk = kuantitas_pupuk / 1;
        volume_air = jumlah_bibit * 10;
    };

    const dataSimulasi = {
        luas_lahan,
        jenis_bibit,
        jumlah_bibit,
        pupuk_npk,
        pupuk_urea,
        volume_air
    };

    return dataSimulasi
}


module.exports = {
    save,
    getResult,
}