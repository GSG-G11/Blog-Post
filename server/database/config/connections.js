const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = '';

if (process.env.NODE_ENV === 'dev') dbUrl = process.env.DB_URL;
if (process.env.NODE_ENV === 'production') dbUrl = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'test') dbUrl = process.env.DB_URL_test;

if (!dbUrl) throw new Error('NO DB_URL');

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
