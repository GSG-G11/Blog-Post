const handleRegister = require('./handleRegister');
const loginPageHandler = require('./loginPageHandler');
const handleLogin = require('./handleLogin');
const homePageHandler = require('./homepageHandler');
const postBlog = require('./postBlog');
const logoutUser = require('./logoutUser');
const getUserName = require('./getUserName');
const getAllBlogs = require('./getAllBlogs');
const getUsernameBasedOnId = require('./getUsernameBasedOnId');

module.exports = {
  handleRegister,
  loginPageHandler,
  handleLogin,
  homePageHandler,
  postBlog,
  logoutUser,
  getUserName,
  getAllBlogs,
  getUsernameBasedOnId,
};
