const { verify } = require('jsonwebtoken');
const { getUserNameUponIdQuery, getUserIdQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { id: userId } = req.query;

  const { access_token: token } = req.cookies;

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.status(400).json({ message: 'No Access' });
    } else {
      getUserIdQuery(decoded.email)
        .then((ids) => {
          getUserNameUponIdQuery(userId)
            .then((data) => {
              const { name } = data.rows[0];
              res.json({ name, curUserId: ids.rows[0].id });
            })
            .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
        })
        .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
    }
  });
};
