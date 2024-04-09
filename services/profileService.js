const User = require('../models').User;

const rProfileService = async (id_user) => {
    const userData = await User.findOne({ where: { id_user: id_user } });
    return userData;
}

const uProfileService = async (id_user) => {
    const userData = await User.findOne({ where: { id_user: id_user } });
    return userData;
}

module.exports = {
    rProfileService,
    uProfileService
}