const { join } = require('path');

const handleLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'html', 'login.html'));
};

module.exports = handleLogin;
