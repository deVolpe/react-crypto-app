import axios from 'axios';

export default axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  headers: {
    authorization: 'Apikey d6d6e8697d98f36950808052e5da5a630cbd287563b51fbee6a5c417fcad5340'
  }
})