import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

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

export default model('cryptocurrencies', cryptoSchema);
