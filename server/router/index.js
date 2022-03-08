const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
} = require('../controllers');

const {
  checkAuth,
} = require('../middleware');

router.get('/register', handleRegister);
router.get('/logout', logoutUser);
router.get('/login', loginPageHandler);
router.get('/home', checkAuth, homePageHandler);
router.post('/login', handleLogin);
router.post('/login', handleLogin);
router.post('/add-blog', postBlog);

module.exports = router;
