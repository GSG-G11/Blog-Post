const { getUsernameQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { email } = req.decoded;
  getUsernameQuery(email)
    .then((data) => {
      res.status(200).json(data.rows[0]);
    })
    .catch(() => {
      res.status(500).json({ message: 'Server Error' });
    });
};
