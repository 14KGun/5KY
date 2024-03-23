const { userModel } = require("../modules/models");

module.exports = async (req, res, next) => {
  req.user = null;
  req.isLogin = false;
  if (req.session.user) {
    req.user = req.session.user;
    req.isLogin = true;
  } else if (req.cookies.userId) {
    const user = await userModel.findById(req.cookies.userId);
    if (user) {
      req.session.user = {
        _id: user._id,
        id: user.id,
        name: user.name,
        age: user.age,
        gender: user.gender,
      };
      req.session.save();
      req.user = req.session.user;
      req.isLogin = true;
    }
  }
  next();
};
