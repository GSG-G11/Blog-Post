const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
} = require('../controllers');

const {
  checkAuth,
} = require('../middleware');

router.post('/login', handleLogin);
router.get('/register', handleRegister);
router.get('/login', loginPageHandler);
router.post('/login', handleLogin);
router.get('/home', checkAuth, homePageHandler);

router.post('/add-blog', postBlog);

module.exports = router;
