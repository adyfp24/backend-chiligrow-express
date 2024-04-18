const User = require('../models').User;

const rProfileService = async (id_user) => {
    const userData = await User.findOne({ where: { id_user: id_user } });
    return userData;
}

const uProfileService = async (id_user, updatedData) => {
    const [updated] = await User.update(updatedData, { where: { id_user: id_user } });
    if (updated) {
        const userData = await User.findOne({ where: { id_user: id_user } });
        return userData;
    }
    return null;
}

module.exports = {
    rProfileService,
    uProfileService
}

