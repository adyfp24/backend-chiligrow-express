const { where } = require('sequelize');
const User = require('../models').User;

const rProfileService = async (id_user) => {
    try {
        const userData = await User.findOne({ where: { id_user: id_user } });
        return userData;
    } catch (error) {
        console.error(error);
        throw new Error('Terjadi kesalahan saat mengambil data profil');
    }
}

const uProfileService = async (id_user, updatedData) => {
    try {
        const [updated] = await User.update(updatedData, { where: { id_user: id_user } });
        if (updated) {
            const userData = await User.findOne({ where: { id_user: id_user } });
            return userData;
        }
        return null;
    } catch (error) {
        console.error(error);
        throw new Error('Terjadi kesalahan saat memperbarui data profil');
    }
}

const cProfileImage = async (id_user, fileName) => {
    try {
        const createdImage = await User.update({
            foto_profile: fileName
        }, {
            where: { id_user: id_user }
        });
        return createdImage;
    } catch (error) {
        console.error(error);
        throw new Error('Terjadi kesalahan saat mengunggah foto profil');
    }
}

module.exports = {
    rProfileService,
    uProfileService,
    cProfileImage
}
