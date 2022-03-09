const connection = require('../config/connections');

const deletePostQuery = (id) => connection.query('delete from blogs where id = $1', [id]);

module.exports = deletePostQuery