module.exports = (req, res) => {
  console.log(req.body);
  res.clearCookie('access_token').json({ message: 'You are logged out' });
};
