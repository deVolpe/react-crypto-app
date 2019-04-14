const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  exchange: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 1
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('cryptocurrencies', cryptoSchema);
