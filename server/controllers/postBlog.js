const { postBlogDB } = require('../database/queries');

const postBlog = (req, res) => {
  postBlogDB(req.body)
    .then((data) => {
      res.json(data.rows);
    })
    .catch(console.log);
};
module.exports = postBlog;
