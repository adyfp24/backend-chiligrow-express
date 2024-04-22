const Joi = require('joi');

const updateProfile = {
    body: Joi.object().keys({
        email: Joi.string().optional().email().max(100),
        alamat: Joi.string().optional().max(100),
        no_hp: Joi.string().optional().max(100),
    })
}

const addProfileImage = {

}

module.exports = {
    updateProfile,
    addProfileImage
}