const authService = require('../../services/authService');

const profile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Anda tidak terautentikasi',
            });
        }
        const id_user = user.id;
        const userData = await authService.profileService(id_user);

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

module.exports = {
    profile
}