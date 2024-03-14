const User = require('../../models').User;

const register = async (req, res) => {
    try {
        const{
            username,
            email,
            password,
            no_hp,
            alamat,
            role
        } = req.body;

        const newUser = await User.create({
            username,
            email,
            password,
            no_hp,
            alamat,
            role
        });

        return res.status(200).json({
            success: true,
            message: 'registrasi sukses',
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
        })
    }
}

module.exports = {
    register
}