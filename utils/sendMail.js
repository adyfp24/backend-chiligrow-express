require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASS
    }
});

const sendMail = async (email, otp) => {

    const mailOptions = {
        from: 'Chiligrow App <adyfp24@gmail.com>',
        to: email,
        subject: 'Ubah kata sandi OTP',
        text: `Kode OTP reset kata sandi anda adalah : ${otp}`
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }

}

module.exports = {
    sendMail
}