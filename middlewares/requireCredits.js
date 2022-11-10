
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: '코인이 부족합니다!' });
  }

  next();
};
