const { isEmpty } = require('lodash');

const Card = require('../models/Card');
const errorHandler = require('../utils/errorHandler');

module.exports = {
  async getAllCards(req, res) {
    try {
      const cards = await Card.find({ user: req.user }).lean();
      if (isEmpty(cards)) {
        return res.status(401).json({ message: 'No cards yet' });
      }
      return res.json(cards);
    } catch (err) {
      errorHandler(res, err);
    }
  },

  async createCard(req, res) {
    try {
      const card = {
        firstCoin: req.body.first,
        secondCoin: req.body.second,
        exchange: req.body.exchange,
        user: req.user.id,
      };
      const candidate = await Card.findOne(card)
        .lean()
        .exec();

      if (candidate) {
        return res.status(409).json({
          conflict: 'Card already exists',
        });
      }
      const newCard = await Card.create(card);
      return res.json(newCard);
    } catch (err) {
      errorHandler(res, err);
    }
  },

  async deleteCard(req, res) {
    try {
      const doc = await Card.findByIdAndRemove(req.body.id, {
        new: true,
      })
        .lean()
        .exec();
      return res.json(doc).end();
    } catch (err) {
      errorHandler(res, err);
    }
  },
};
