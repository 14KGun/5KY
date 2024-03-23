const locationRecord = {};

module.exports.getLocationRecord = (id) => {
  return locationRecord[id];
};

module.exports.setLocationRecord = (id, location) => {
  locationRecord[id] = location;
};

module.exports.findNearUserPairs = () => {};
