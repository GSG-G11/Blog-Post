const connection = require('../config/connections');

module.exports = () => connection.query('SELECT * FROM blogs');
