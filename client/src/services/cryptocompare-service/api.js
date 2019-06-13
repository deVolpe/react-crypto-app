import axios from 'axios';

export const source = axios.CancelToken.source();

export default axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  headers: {
    Authorization: 'Apikey 3d4373e4f9cadb376998af238332036ab270b2c60c2538ebe48b7ce84d5ed707',
  },
  cancelToken: source.token,
});
