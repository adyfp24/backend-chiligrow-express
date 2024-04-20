const Joi = require('joi');

const updateSensor = {
    body: Joi.object().keys({
        nilai_kelembapan: Joi.number().required(),
    })
};

module.exports = {
    updateSensor
}