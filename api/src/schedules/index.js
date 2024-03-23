const cron = require("node-cron");
const { findNearUserPairs } = require("../utils/location");
const historyModel = require("../modules/models/history.model");

module.exports = (app) => {
  const handler = async () => {
    const pairs = await findNearUserPairs();

    const cutline = new Date();
    cutline.setHours(cutline.getHours() - 1);

    for (const [user1Id, user2Id] of pairs) {
      let history = await historyModel.findOne({
        $and: [
          { userIds: { $elemMatch: { $eq: user1Id } } },
          { userIds: { $elemMatch: { $eq: user2Id } } },
          { updatedAt: { $gt: cutline } },
        ],
      });
      if (!history) {
        history = await historyModel.findOne({
          $and: [
            { userIds: { $elemMatch: { $eq: user1Id } } },
            { userIds: { $elemMatch: { $eq: user2Id } } },
          ],
        });
        if (history) {
          history.joinAts.push(new Date());
          await history.save();
        } else {
          await historyModel.create({
            userIds: [user1Id, user2Id],
            joinAts: [new Date()],
          });
        }
      }
    }
  };
  handler();
  cron.schedule("*/1 * * * *", handler);
};
