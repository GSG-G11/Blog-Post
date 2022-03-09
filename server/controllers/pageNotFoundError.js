const { join } = require('path');

module.exports = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'views', 'html', '404.html'), (err) => {
      if (err) {
        res
          .status(500)
          .sendFile(join(__dirname, '..', '..', 'views', 'html', '500.html'));
      }
    });
};
