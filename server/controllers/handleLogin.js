const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { loginSchema } = require('../utils');
const { getUserInfo } = require('../database/queries');

module.exports = (req, res) => {
  const { email, password } = req.body;

  loginSchema
    .validateAsync(req.body)
    .then(() => {
      getUserInfo(email)
        .then((data) => {
          if (!data.rows.length) {
            res.status(400).json({ message: 'Invalid Email, check your email or create a new account' });
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
    })
    .catch(() => { res.status(400).json({ message: 'Your information does not meet the requirements' }); });
};
