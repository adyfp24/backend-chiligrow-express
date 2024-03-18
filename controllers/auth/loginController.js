const authService = require('../../services/authService');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const loginResult = await authService.loginService(username, password);
        if (loginResult.success) {
            res.status(200).json(loginResult);
        } else {
            res.status(401).json(loginResult);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = {
    login
}