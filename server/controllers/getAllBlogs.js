const { getAllBlogsQuery } = require('../database/queries');

module.exports = (req, res) => {
  getAllBlogsQuery()
    .then(({ rows }) => res.json(rows))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};
