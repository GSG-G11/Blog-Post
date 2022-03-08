const connection = require('../config/connections');

module.exports = (email) => connection.query('SELECT * FROM users WHERE email = $1', [email]);
