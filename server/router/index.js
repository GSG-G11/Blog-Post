const { join } = require('path');
const router = require('express').Router();

router.get('/register', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'views', 'html', 'register.html'));
});

module.exports = router;