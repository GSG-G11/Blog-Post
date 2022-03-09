const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
  getUserName,
  getAllBlogs,
  getUsernameBasedOnId,
} = require('../controllers');
const { checkAuth } = require('../middleware');

router.get('/register', handleRegister);
router.get('/login', loginPageHandler);
router.get('/home', checkAuth, homePageHandler);
router.get('/all-blogs', getAllBlogs);
router.get('/username', getUsernameBasedOnId);
router.post('/username', checkAuth, getUserName);
router.post('/logout', logoutUser);
router.post('/login', handleLogin);
router.post('/add-blog', checkAuth, postBlog);

module.exports = router;
