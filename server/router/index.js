const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
  getUserName,
} = require('../controllers');
const { checkAuth } = require('../middleware');

router.get('/register', handleRegister);
router.get('/login', loginPageHandler);
router.get('/home', checkAuth, homePageHandler);
router.post('/username', getUserName);
router.post('/logout', logoutUser);
router.post('/login', handleLogin);
router.post('/add-blog', postBlog);

module.exports = router;
