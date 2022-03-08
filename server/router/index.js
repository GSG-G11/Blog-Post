const router = require('express').Router();
const {
  handleRegister,
  handleLogin,
  postBlog,
  logoutUser,
} = require('../controllers');

router.get('/login', handleLogin);
router.get('/register', handleRegister);
router.post('/add-blog', postBlog);
router.get('/logout', logoutUser);
module.exports = router;
