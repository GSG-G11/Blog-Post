const Joi = require('joi');

const blogSchema = Joi.object({
  blogTitle: Joi.string().min(3).required(),
  blogContent: Joi.string().required(),
});

module.exports = blogSchema;
