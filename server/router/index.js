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
router.post('/register', handleSignup);
router.post('/login', handleLogin);
router.use(checkAuth);
router.post('/username', getUserName);
router.post('/logout', logoutUser);
router.post('/add-blog', postBlog);
router.delete('/post/:id', handleDeletePost);
router.use(pageNotFoundError);

module.exports = router;
