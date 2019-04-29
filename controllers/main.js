const Crypto = require('../models/Crypto');

module.exports = {
  getAll(req, res) {
    Crypto.find({
      user: req.user.id
    })
      .then(cards => {
        if (cards) {
          res.status(200).json(cards);
        } else {
          res.status(404).json({ error: 'No cards you have' });
        }
      })
      .catch(console.error);
  },

  async create(req, res) {
    const candidate = await Crypto.findOne({
      name: req.body.coin,
      exchange: req.body.exchange,
      user: req.user.id
    });

    if (candidate) {
      res.status(409).json({
        error: 'Card already exists'
      });
    }

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
    Crypto.deleteOne({ _id: req.body.id, user: req.user.id })
      .then(() => res.status(200).json({ id: req.body.id }))
      .catch(console.error);
  }
};
