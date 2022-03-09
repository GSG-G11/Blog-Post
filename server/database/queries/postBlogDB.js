const connection = require('../config/connections');

const postBlogDB = ({ blogTitle, blogContent, user_id }) => connection.query({
  text: 'INSERT INTO blogs (titel , content , user_id) VALUES ($1,$2,$3) RETURNING *;',
  values: [blogTitle, blogContent, user_id],
});

module.exports = postBlogDB;
