const cron = require("node-cron");
const { findNearUserPairs } = require("../utils/location");

module.exports = (app) => {
  cron.schedule("*/1 * * * *", async () => {
    const pairs = await findNearUserPairs();

    for (const [user1, user2] of pairs) {
      user1.friend = user2._id;
      user2.friend = user1._id;

      await user1.save();
      await user2.save();
    }
  });
};
