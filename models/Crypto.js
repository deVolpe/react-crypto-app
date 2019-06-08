const mongoose = require('mongoose');

const { Schema } = mongoose;

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
    required: true,
  },
  isFollowed: {
    type: Boolean,
    default: false,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('cryptocurrencies', cryptoSchema);
