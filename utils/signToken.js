const jwt = require('jsonwebtoken');

const generateJWT = (id_user) => {
    const apiToken = jwt.sign({ id: id_user }, process.env.JWT_SECRET);
    return apiToken;
}

module.exports = {
    generateJWT
}