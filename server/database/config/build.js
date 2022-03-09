const { join } = require('path');
const { readFileSync } = require('fs');

const connetion = require('./connections');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'dbBuild', 'init.sql')).toString();
  return connetion.query(sql);
};
module.exports = { dbBuild };
