const { getUserNameUponIdQuery, getUserIdQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { id: userId } = req.query;

  getUserIdQuery(req.decoded.email)
    .then((ids) => {
      getUserNameUponIdQuery(userId)
        .then((data) => {
          const { name } = data.rows[0];
          res.json({ name, curUserId: ids.rows[0].id });
        })
        .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};
