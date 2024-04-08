const User = require('../models').User;
const bcrypt = require('bcrypt');
const utilsToken = require('../utils/signToken');

const registerService = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await User.create({ ...userData, password: hashedPassword });
    return newUser;
}

const loginService = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return { success: false, message: 'User tidak ditemukan' };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const apiToken = utilsToken.generateJWT(user.id_user);
            return {
                success: true,
                message: 'Login sukses',
                data: user,
                token: apiToken
            };
        } else {
            return { success: false, message: 'Password salah' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Internal server error' };
    }
};

const logoutService = async () => {

}

const profileService = async (id_user) => {
    const userData = await User.findOne({ where: { id_user: id_user } });
    return userData;
}

module.exports = {
    registerService,
    loginService,
    logoutService,
    profileService
} 