const Joi = require('joi')

const schema = Joi.object({
    template: Joi.string().required(),
    data: Joi.object().required(),
})

module.exports = schema