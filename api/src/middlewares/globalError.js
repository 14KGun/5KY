module.exports = (err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send("Internal server error");
};
