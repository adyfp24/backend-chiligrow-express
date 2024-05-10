require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adyfp24@gmail.com', 
        pass: 'Bismillah24.'
    }
});

const sendMail = async (email, otp) => {

    const mailOptions = {
        from: 'adyfp24@gmail.com', 
        to: email,
        subject: 'Reset Password OTP',
        text: `Your OTP for password reset is: ${otp}`
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