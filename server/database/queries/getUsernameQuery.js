const connection = require('../config/connections');

module.exports = (email) => connection.query('SELECT users.name FROM users WHERE email = $1', [email]);
