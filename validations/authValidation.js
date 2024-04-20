const Joi = require('joi');

const registUser = {
    body: Joi.object().keys({
        id_user: Joi.optional(),
        username: Joi.string().required().max(100),
        email: Joi.string().required().email().max(100),
        password: Joi.string().required().max(100),
        alamat: Joi.string().required().max(100),
        no_hp: Joi.string().required().max(100),
        role: Joi.optional(),
    })
};

const loginUser = {
    body: Joi.object().keys({
        id_user: Joi.optional(),
        username: Joi.string().required().max(100),
        password: Joi.string().required().max(100),
        email: Joi.optional(),
        alamat: Joi.optional(),
        no_hp: Joi.optional(),
        role: Joi.optional(),
    })
}

module.exports = {
    registUser,
    loginUser
}