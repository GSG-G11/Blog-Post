const { join } = require('path');

module.exports = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'html', 'register.html'));
};
