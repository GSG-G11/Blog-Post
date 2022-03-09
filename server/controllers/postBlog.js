const { verify } = require('jsonwebtoken');
const { postBlogDB } = require('../database/queries');

const postBlog = (req, res) => {
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
};
module.exports = postBlog;
