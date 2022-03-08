module.exports = (req, res) => {
  res.clearCookie('access_token').json({ message: 'You are logged out' });
};
