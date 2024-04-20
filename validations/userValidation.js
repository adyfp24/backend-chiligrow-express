const Joi = require('joi');

const updateProfile = {
    body: Joi.object().keys({
        email: Joi.string().required().email().max(100),
        alamat: Joi.string().required().max(100),
        no_hp: Joi.string().required().max(100),
    })
}

const addProfileImage = {

}

module.exports = {
    updateProfile,
    addProfileImage
}