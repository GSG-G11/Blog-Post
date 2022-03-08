const { verify } = require('jsonwebtoken');
const { getUsernameQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { access_token: token } = req.cookies;

  if (token) {
    verify(token, process.env.SECRET, (err, encoded) => {
      if (err) {
        res.redirect('/login');
      } else {
        getUsernameQuery(encoded.email)
          .then(() => {
            next();
          })
          .catch(() => res.redirect('/login'));
      }
    });
  } else res.redirect('/login');
};
