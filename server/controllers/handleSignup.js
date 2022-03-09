const { sign } = require('jsonwebtoken');
const { signSchema } = require('../utils');
const hashPassword = require('../utils/hashPassword');
const { sigupQuery } = require('../database/queries');

module.exports = (req, res) => {
  signSchema
    .validateAsync(req.body)
    .then((data) => {
      hashPassword(data.password, (err, password) => {
        if (err) {
          console.log(err);
        } else {
          const { name, email } = data;
          sigupQuery({ name, email, password }).then(() => {
            sign({ email }, process.env.SECRET, { expiresIn: '30d' }, (err, token) => {
              if (err) {
                console.log(err);
              } else {
                res.cookie('access_token', token, {
                  maxAge: 2592000000,
                  httpOnly: true,
                }).json({ message: 'done' });
              }
            });
          }).catch(() => res.status(404).json({ message: 'The email you\'re using is already taken' }));
        }
      });
    })
    .catch(() => res.status(401).json({ message: 'Your information does not meet the requirements' }));
};
