const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 지불하면 5개 이메일 설문지를 보낼 수 있어요.',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
