const mongoose = require('mongoose');

const { Schema } = mongoose;

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

module.exports = mongoose.model('cryptocurrencies', cryptoSchema);
