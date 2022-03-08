const connection = require('../config/connections');

const postBlogDB = ({ titel, content, user_id }) => connection.query({
  text: 'INSERT INTO blogs (titel , content , user_id) VALUES ($1,$2,$3);',
  values: [titel, content, user_id],
});

module.exports = postBlogDB;
