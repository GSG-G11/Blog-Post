const { deletePostQuery } = require('../database/queries');

module.exports = (req, res) => {
  deletePostQuery(req.params.id)
    .then((data) => res.json(data.rows[0]))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};
