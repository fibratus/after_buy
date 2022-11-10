module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: '로그인하셔야 합니다.' });
  }

  next();
};
