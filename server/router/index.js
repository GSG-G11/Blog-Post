const router = require('express').Router();

const {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
  handleSignup,
  getUserName,
  getAllBlogs,
  getUsernameBasedOnId,
  pageNotFoundError,
  handleDeletePost,
} = require('../controllers');

const { checkAuth } = require('../middleware');

router.get('/register', handleRegister);
router.get('/login', loginPageHandler);
router.get('/all-blogs', getAllBlogs);

router.get('/home', checkAuth, homePageHandler);
router.get('/username', checkAuth, getUsernameBasedOnId);
router.post('/username', checkAuth, getUserName);
router.post('/logout', checkAuth, logoutUser);
router.post('/add-blog', checkAuth, postBlog);
router.post('/register', handleSignup);
router.post('/login', handleLogin);
router.delete('/delete-Post/:id', handleDeletePost);
router.use(pageNotFoundError);

module.exports = router;
