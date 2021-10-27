const Joi = require('joi')
const { spaceModel } = require('../models/requestModel')
const { alignmentCases } = require('../def/definition')

const schema = Joi.object().keys({
  str: Joi.string().required(),
  lineWidth: Joi.number().required(),
  textAlignment: Joi.string().valid(...[alignmentCases.center, alignmentCases.left, alignmentCases.right]).required(),
  spacing: Joi.string().valid(...Object.keys(spaceModel)).required(),
  bolds: Joi.array().required(),
  italics: Joi.array().required(),
  replaces: Joi.array()
    .items(Joi.object().keys({
      replaceFrom: Joi.string().required(),
      replaceTo: Joi.string().required()
    }).unknown(true)).required(),
  chucks: Joi.array().required()
}).unknown(true)

const Validate = () => {
  return (req, res, next) => {
    const result = schema.validate(req.body)
    if (result.error) {
      return res.status(400).json({ code: 400, message: 'Invalid Input', error: result.error.details })
    }
    next()
  }
}
module.exports = { Validate }
