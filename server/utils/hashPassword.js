const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.hash(password, salt, callback);
    }
  });
};

module.exports = hashPassword;
