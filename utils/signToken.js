const jwt = require('jsonwebtoken');

const generateJWT = (id_user) => {
    const apiToken = jwt.sign({ id: id_user }, process.env.JWT_SECRET, { expiresIn: '30m' });
    return apiToken;
}

module.exports = {
    generateJWT
}