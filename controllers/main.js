const Crypto = require('../models/Crypto');

module.exports = {
  async getAllCryptoCards(req, res) {
    try {
      const cards = await Crypto.find({
        user: req.user.id
      });
      if (cards) {
        res.status(200).json({
          result: cards
        });
      }
    } catch (e) {}
  },

  async create(req, res) {
    try {
      const card = new Crypto({
        name: req.body.coin,
        exchange: req.body.exchange,
        user: req.user.id
      });
      await card.save();
      res.status(201).json({ card });
    } catch (e) {
      res.status(404).json({
        error: 'S'
      });
    }
  },
  async delete(req, res) {
    try {
      await Crypto.remove({ _id: req.param.id });
      res.status(200).json({
        message: `Card ${req.param.id} was delete`
      });
    } catch (e) {}
  },
};
