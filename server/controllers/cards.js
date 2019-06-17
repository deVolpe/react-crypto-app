const { isEmpty } = require('lodash');

const Crypto = require('../models/Card');

module.exports = {
  getAllCards(req, res) {
    Crypto.find({
      user: req.user.id,
    })
      .then((cards) => {
        if (isEmpty(cards)) {
          return res.status(404).json({ message: 'No cards yet' });
        }
        return res.json(cards);
      })
      .catch(console.error);
  },

  async createCard(req, res) {
    try {
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

      const newCard = await Crypto.create(card);

      return res.json(newCard);
    } catch (err) {
      errorHandler(res, err);
    }
  },

  deleteCard(req, res) {
    Crypto.findByIdAndRemove(req.body.id)
      .then(data => res.status(200).json(data._id))
      .catch(console.error);
  },
};
