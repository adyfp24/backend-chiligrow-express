const authService = require('../../services/authService');

const register = async (req, res) => {
    try {
        const userData = {
            username,
            email,
            password,
            no_hp,
            alamat,
            role
        } = req.body;

        const newUser = await authService.registerService(userData);

        return res.status(200).json({
            success: true,
            message: 'registrasi sukses',
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    register
}