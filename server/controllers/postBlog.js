const { postBlogDB } = require('../database/queries');
const { blogSchema } = require('../utils');

module.exports = (req, res) => {
  blogSchema
    .validateAsync(req.body)
    .then(() => {
      const { blogTitle, blogContent } = req.body;
      const { email } = req.decoded;
      postBlogDB({ blogTitle, blogContent, email })
        .then((data) => {
          res.json(data.rows);
        })
        .catch(console.log);
    })
    .catch(() => res.status(401).json({ message: 'Title length must be at least 3 characters long' }));
};
