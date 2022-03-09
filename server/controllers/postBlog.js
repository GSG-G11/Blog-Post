const { verify } = require('jsonwebtoken');
const { postBlogDB } = require('../database/queries');
const { blogSchema } = require('../utils');

const postBlog = (req, res) => {
  blogSchema
    .validateAsync(req.body)
    .then(() => {
      const token = req.cookies.access_token;
      if (token) {
        verify(token, process.env.SECRET, (err, decoded) => {
          if (err) {
            res.status(401).json({ message: 'No Access Privileges' });
          } else {
            const { blogTitle, blogContent } = req.body;
            const { email } = decoded;
            postBlogDB({ blogTitle, blogContent, email })
              .then((data) => {
                res.json(data.rows);
              })
              .catch(console.log);
          }
        });
      } else {
        res.status(401).json({ message: 'No Access Privileges' });
      }
    })
    .catch(() => res.status(401).json({ message: 'Title length must be at least 3 characters long' }));
};
module.exports = postBlog;
