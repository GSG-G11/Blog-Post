const { postBlogDB } = require('../database/queries');

const postBlog = (req, res) => {
  postBlogDB(req.body);
};
module.exports = postBlog;
