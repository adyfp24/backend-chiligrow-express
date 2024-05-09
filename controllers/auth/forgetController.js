const authService = require('../../services/authService');
const {generateOtp} = require('../../utils/generateOtp');

const getOTP = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Anda tidak terautentikasi',
            });
        }
        const otp = generateOtp();
        const sendEmail = await authService.getOTP(otp, user.id_user);
        if(sendEmail){
            res.status(200).json({
                success: true,
                message: 'Email otp berhasil dikirimkan',
                data: {
                    otp:otp
                },
            });
        }else{
            return res.status(400).json({
                success: false,
                message: 'gagal mengirim otp email',
            }) 
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}

const verifyOTP = async (req, res ) => {

}

module.exports = {
    getOTP,
    verifyOTP
};