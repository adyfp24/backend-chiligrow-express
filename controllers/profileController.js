const profileService = require('../services/profileService');

const getProfile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Anda tidak terautentikasi',
            });
        }
        const id_user = user.id;
        const userData = await profileService.rProfileService(id_user);

        res.status(200).json({
            success: true,
            message: 'Anda telah terautentikasi login',
            data: userData,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server',
        });
    }
}

const updateProfile = async (req, res) => {

}

module.exports = {
    getProfile,
    updateProfile
}