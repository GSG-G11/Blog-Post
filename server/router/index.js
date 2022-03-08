const router = require('express').Router();
const { handleRegister, handleLogin, postBlog } = require('../controllers');

router.get('/login', handleLogin);
router.get('/register', handleRegister);
router.post('/add-blog', postBlog);

module.exports = router;
