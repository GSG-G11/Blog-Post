<<<<<<< HEAD
const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { loginSchema } = require('../utils');
const { getUserInfo } = require('../database/queries');

module.exports = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: 'Try again' });
  } else {
    getUserInfo(email)
      .then((data) => {
        if (!data.rows.length) {
          res.status(400).json({ message: 'Invalid Email' });
        } else {
          const hashedPassword = data.rows[0].password;
          compare(password, hashedPassword)
            .then((valid) => {
              if (valid) {
                sign({ email }, process.env.SECRET, { expiresIn: '30d' }, (err, token) => {
                  if (err) {
                    console.log(err.message);
                  } else {
                    res.cookie('access_token', token).send({ name: data.rows[0].name });
                  }
                });
              } else {
                res.status(400).json({ message: 'Invalid Password' });
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }
};
=======
const { join } = require('path');

const handleLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'html', 'login.html'));
};

module.exports = handleLogin;
>>>>>>> main
