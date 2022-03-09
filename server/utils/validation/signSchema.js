const Joi = require('joi');

const signSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = signSchema;
