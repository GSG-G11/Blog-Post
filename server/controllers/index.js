const handleRegister = require('./handleRegister');
const loginPageHandler = require('./loginPageHandler');
const handleLogin = require('./handleLogin');
const homePageHandler = require('./homepageHandler');
const postBlog = require('./postBlog');
const logoutUser = require('./logoutUser');
const handleSignup = require('./handleSignup');
const getUserName = require('./getUserName');
const pageNotFoundError = require('./pageNotFoundError');
const serverError = require('./serverError');

module.exports = {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
  handleSignup,
  getUserName,
  pageNotFoundError,
  serverError,
};
