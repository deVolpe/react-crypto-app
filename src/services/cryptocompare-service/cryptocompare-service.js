import api from './api';

import data from './data';  

class CryptoCompareService {

  /**
   * Returns all coins that are available with full info about them
   * See details: 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allCoinsWithContentEndpoint'
   * @return {object}
   *
   */
  getAllCoins = async () => {
    const res = await api("all/coinlist");
    return await res.data["Data"];
  };

  /**
   * Returns all exchanges that are available
   * See details: 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allExchangesStaticInfoEndpoint'
   *
   * @return {array}
   *
   */
  getAllExchanges = async () => {
    const res = await api('exchanges/general');
    return await res.data['Data'];
  };

  getAllCoinsPrices = async (coin, market) => {
    const res = await api(`pricemulti?fsyms=${coin}&tsyms=${data.currencies.join(',')}&e=${market}`);
    return await res
  }
};

export default new CryptoCompareService;