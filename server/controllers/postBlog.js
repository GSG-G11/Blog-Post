const { postBlogDB } = require('../database/queries');

const postBlog = (req, res) => {
  const { blogTitle, blogContent } = req.body;
  const { email } = req.decoded;
  postBlogDB({ blogTitle, blogContent, email })
    .then((data) => {
      res.json(data.rows);
    })
    .catch(console.log);
};
module.exports = postBlog;
