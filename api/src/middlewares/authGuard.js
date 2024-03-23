module.exports = async (req, res, next) => {
  if (!req.isLogin || !req.user) {
    return res.status(401).send("Unauthorized");
  }
  next();
};
