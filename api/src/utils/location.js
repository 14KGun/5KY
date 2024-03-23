const userModel = require("../modules/models/user.model");

const locationRecord = {};

module.exports.getLocationRecord = (id) => {
  return locationRecord[id];
};

module.exports.setLocationRecord = (id, location) => {
  locationRecord[id] = location;
};

module.exports.findNearUserPairs = async () => {
  const users = [];
  for (const userId in locationRecord) {
    const user = await userModel.findById(userId).lean();
    if (user) users.push(user);
  }

  const pairs = [];
  for (const user1 of users) {
    for (const user2 of users) {
      if (user1._id <= user2._id) continue;

      let distance = 0;
      for (const tag1 of user1.tags) {
        for (const tag2 of user2.tags) {
          if (tag1 === tag2) distance += 1;
        }
      }

      if (distance >= 1) {
        pairs.push([user1._id, user2._id]);
      }
    }
  }

  return pairs;
};
