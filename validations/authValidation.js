const Joi = require('joi');

const registUser = {
    body: joi.object().keys({
        username: Joi.string().required().max(100),
        email: Joi.string().required().email().max(100),
        password: Joi.string().required().max(100),
        alamat: Joi.string().required().max(100),
        no_hp: Joi.string().required().max(100),
    })
};

module.exports = {
    registUser,
    
}