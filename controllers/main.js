const Crypto = require('../models/Crypto');
const isEmpty = require('./validators/features/isEmpty');

module.exports = {
  getAll(req, res) {
    Crypto.find({
      user: req.user.id,
    })
      .then((cards) => {
        if (isEmpty(cards)) {
          return res.status(404).json({ message: 'No cards yet' });
        }
        return res.status(200).json(cards);
      })
      .catch(console.error);
  },

  async create(req, res) {
    const candidate = await Crypto.findOne({
      name: req.body.coin,
      exchange: req.body.exchange,
      user: req.user.id,
    });

    if (candidate) {
      return res.status(409).json({
        conflict: 'Card already exists',
      });
    }

    const card = new Crypto({
      name: req.body.coin,
      exchange: req.body.exchange,
      user: req.user.id,
    });
    card
      .save()
      .then(card => res.status(201).json(card))
      .catch(console.error);
  },

  delete(req, res) {
    Crypto.findByIdAndRemove(req.body.id)
      .then(data => res.status(200).json(data._id))
      .catch(console.error);
  },

  async setCount(req, res) {
    const data = await Crypto.findByIdAndUpdate(req.body.id, {
      count: req.body.count,
    });

    Crypto.findOne({ _id: data._id })
      .then(result => res.status(200).json(result.count))
      .catch(console.error);
  },
};
