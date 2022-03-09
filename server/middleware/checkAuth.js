const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { access_token: token } = req.cookies;

  if (token) {
    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.redirect('/login');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else res.redirect('/login');
};
