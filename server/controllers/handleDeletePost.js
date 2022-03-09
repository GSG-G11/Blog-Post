const deletePostQuery = require('../database/queries/deletePostQuery');

const handleDeletePost = (req, res) => {
  console.log(req.params.id);
  deletePostQuery(req.params.id).then(console.log);
 
  };
module.exports = handleDeletePost