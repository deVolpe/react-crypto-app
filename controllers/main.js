const Crypto = require('../models/Crypto');

module.exports = {
  getAll(req, res) {
    Crypto.find({
      user: req.user.id
    })
      .then(cards => {
        if (cards) {
          res.status(200).json(cards);
        }
      })
      .catch(console.error);
  },

  // Checking for double
  create(req, res) {
    const card = new Crypto({
      name: req.body.coin,
      exchange: req.body.exchange,
      user: req.user.id
    });
    card
      .save()
      .then(card => {
        res.status(201).json(card);
      })
      .catch(console.error);
  },
  delete(req, res) {
    Crypto.deleteOne({ _id: req.body.id })
      .then(() => res.status(200).json({ id: req.body.id }))
      .catch(console.error);
  }
};
