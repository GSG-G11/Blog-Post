module.exports = (req, res) => {
  res.clearCookie('access_token').redirect('/login');
};
