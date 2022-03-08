const { join } = require('path');

const handleRegister = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'views', 'html', 'register.html'));
};

module.exports = handleRegister;
