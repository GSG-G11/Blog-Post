const router = require('express').Router();
const {handleRegister} = require('../controllers');

router.get('/register', handleRegister);

module.exports = router;