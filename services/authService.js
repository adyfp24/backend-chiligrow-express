const User = require('../models').User;
const bcrypt = require('bcrypt');
const utilsToken = require('../utils/signToken');
const utilsMail = require('../utils/sendMail');

const registerService = async (userData) => {
    try {
        const isUsernameExist = await User.findOne({ where: { username: userData.username } });
        if (isUsernameExist) {
            return { success: false, message: 'username sudah digunakan' };
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await User.create({ ...userData, password: hashedPassword });
        return newUser;
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Internal server error' };
    }
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

const getOTP = async (otp, email) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            user.otp = otp;
            await user.save();
        }
        const sendEmail = utilsMail.sendMail(email, otp);
        if (sendEmail) {
            return true;
        }else{
            return false;
        } 

    } catch (error) {
        console.log(error);
        throw new Error('Failed to send email otp');
    }
}

const verifyOTP = async (otp, email) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        return user.otp == otp;
    } catch (error) {
        console.log(error);
        throw new Error('Failed verify otp');
    }
}

module.exports = {
    registerService,
    loginService,
    logoutService,
    getOTP,
    verifyOTP
} 