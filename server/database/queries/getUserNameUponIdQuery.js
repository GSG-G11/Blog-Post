const connection = require('../config/connections');

module.exports = (userId) => connection.query('SELECT users.name FROM users WHERE id = $1', [userId]);
