module.exports = async (req, res, next) => {
  req.user = null;
  req.isLogin = false;
  if (req.session.user) {
    req.user = req.session.user;
    req.isLogin = true;
  }
  next();
};
