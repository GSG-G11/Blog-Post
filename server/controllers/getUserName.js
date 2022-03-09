const { verify } = require('jsonwebtoken');
const { getUsernameQuery } = require('../database/queries');

const getUserName = (req, res) => {
  const token = req.cookies.access_token;
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'You have no access' });
    } else {
      const { email } = decoded;
      getUsernameQuery(email)
        .then((data) => {
          res.status(200).json(data.rows[0]);
        })
        .catch((err) => {
          res.status(500).json({ message: 'Server Error' });
        });
    }
  });
};

module.exports = getUserName;
