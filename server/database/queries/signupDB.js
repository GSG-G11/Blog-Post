const connection = require('../config/connections');

const signUpQuirey = ({ name, email, password }) => connection.query('INSERT INTO users (name ,  email, password) VALUES ($1,$2,$3) RETURNING (email)', [name, email, password]);
module.exports = signUpQuirey;
