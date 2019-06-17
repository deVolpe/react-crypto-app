const { Schema, model } = require('mongoose');

const cryptoSchema = new Schema({
  firstCoin: {
    type: String,
    required: true,
  },
  secondCoin: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
    required: true,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = model('cards', cryptoSchema);
