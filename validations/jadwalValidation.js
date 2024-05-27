const Joi = require('joi');

const createJadwal = {
    body: Joi.object().keys({
        id_jadwal_pemupukan: Joi.optional(),
        
        selang_hari: Joi.number().required(),
        selang_jam: Joi.string().required(),
        user_id: Joi.optional()
    })
}

const updateJadwal = {
    body: Joi.object().keys({
        id_jadwal_pemupukan: Joi.optional(),
        selang_hari: Joi.number().required(),
        selang_jam: Joi.string().required(),
        user_id: Joi.optional()
    })
}

module.exports = {
    createJadwal,
    updateJadwal
}

