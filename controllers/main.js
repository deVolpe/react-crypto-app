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
    const card = {
      firstCoin: req.body.first,
      secondCoin: req.body.second,
      exchange: req.body.exchange,
      user: req.user.id,
    };
    const candidate = await Crypto.findOne(card);

    if (candidate) {
      return res.status(409).json({
        conflict: 'Card already exists',
      });
    }

    const newCard = new Crypto(card);
    newCard
      .save()
      .then(card => res.status(201).json(card))
      .catch(console.error);
  },

  delete(req, res) {
    Crypto.findByIdAndRemove(req.body.id)
      .then(data => res.status(200).json(data._id))
      .catch(console.error);
  },
};
