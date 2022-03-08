const router = require('express').Router();
const { handleRegister, handleLogin } = require('../controllers');

router.get('/login', handleLogin);
router.get('/register', handleRegister);

module.exports = router;
