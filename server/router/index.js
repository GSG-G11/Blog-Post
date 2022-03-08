const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
} = require('../controllers');

const {
  checkAuth,
} = require('../middleware');

router.get('/register', handleRegister);
router.get('/login', loginPageHandler);

router.post('/login', handleLogin);
router.get('/home', checkAuth, homePageHandler);

module.exports = router;
