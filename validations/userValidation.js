const Joi = require('joi');

const updateProfile = {
    body: Joi.object().keys({
        id_user: Joi.optional(),
        username: Joi.optional(),
        email: Joi.string().optional().email().max(100),
        alamat: Joi.string().optional().max(100),
        no_hp: Joi.string().optional().max(100),
        password: Joi.optional(),
        role: Joi.optional(),
    })
}

module.exports = {
    updateProfile,
}