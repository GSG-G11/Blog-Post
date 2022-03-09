const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = '';

if (process.env.NODE_ENV === 'dev') dbUrl = process.env.DB_URL;
else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'test') dbUrl = process.env.DB_URL_test;
else throw new Error('NO DB_URL');

const options = {
  connectionString: dbUrl,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
};

module.exports = new Pool(options);
