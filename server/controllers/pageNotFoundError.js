const { join } = require('path');
const serverError = require('./serverError')

module.exports = (req, res, next) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'views', 'html', '404.html'), (err) => {
      if (err) {
        res
          .status(500)
          serverError(err, req, res, next);
      }
    });
};
