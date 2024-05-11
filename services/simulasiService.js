const create = () => {

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
    create,
    getResult,

}