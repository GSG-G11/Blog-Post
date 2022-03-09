const connection = require('../config/connections');

const postBlogDB = ({ blogTitle, blogContent, email }) => connection.query({
  text: 'INSERT INTO blogs (title , content , user_id) VALUES ($1,$2,(SELECT id FROM users where email = $3)) RETURNING *;',
  values: [blogTitle, blogContent, email],
});

module.exports = postBlogDB;
