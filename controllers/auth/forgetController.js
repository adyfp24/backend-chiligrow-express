const authService = require('../../services/authService');
const { generateOtp } = require('../../utils/generateOtp');
const User = require('../../models').User;

const getOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Email tidak terdaftar',
            });
        }
        
        const otp = generateOtp();
        const sendEmail = await authService.getOTP(otp, email);
        if (sendEmail) {
            res.status(200).json({
                success: true,
                message: 'Email otp berhasil dikirimkan',
                data: {
                    otp: otp
                },
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'gagal mengirim otp email',
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server: ' + error,
        });
    }

}

const verifyOTP = async (req, res) => {
    try {
        const { otp, email } = req.body;
        const isOtpValid = await authService.verifyOTP(otp, email);
        if (isOtpValid) {
            res.status(200).json({
                success: true,
                message: 'kode OTP sesuai',
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'kode otp tidak sesuai',
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server: ' + error,
        });
    }
}

const resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isPassUpdated = await authService.resetPassword(email, password);
        if (isPassUpdated) {
            res.status(200).json({
                success: true,
                message: 'password berhasil diperbarui',
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'password gagal diperbarui',
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server: ' + error,
        });
    }
}

module.exports = {
    getOTP,
    verifyOTP,
    resetPassword
};