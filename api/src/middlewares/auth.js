const { userModel } = require("../modules/models");

module.exports = async (req, res, next) => {
  const innerUserId = req.cookies.userId || req.body.userId || req.query.userId;

  req.user = null;
  req.isLogin = false;
  if (req.session.user) {
    req.user = req.session.user;
    req.isLogin = true;
  } else if (innerUserId) {
    const user = await userModel.findById(innerUserId);
    if (user) {
      req.session.user = {
        _id: user._id,
        id: user.id,
        name: user.name,
        age: user.age,
        gender: user.gender,
      };
      await req.session.save();
      req.user = req.session.user;
      req.isLogin = true;
    }
  }
  next();
};
