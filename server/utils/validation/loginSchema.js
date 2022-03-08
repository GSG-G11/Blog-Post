const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = loginSchema;
