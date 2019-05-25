import axios from 'axios';

export default axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  headers: {
    authorization: 'Apikey 3d4373e4f9cadb376998af238332036ab270b2c60c2538ebe48b7ce84d5ed707',
  },
});
