import api from './api';
import data from './data';

class CryptoCompareService {
  /**
   * Returns all coins that are available with full info about them
   * See details: 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allCoinsWithContentEndpoint'
   *
   * @return {object}
   *
   */
  getAllCoins = async () => {
    const res = await api('all/coinlist');
    return res.data['Data'];
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
    return res.data['Data'];
  };

  /**
   * Returns the fiat currencies of passed coin
   * See details: 'https://min-api.cryptocompare.com/documentation?key=Price&cat=SingleSymbolPriceEndpoint'
   *
   * @param {string} coin
   * @return {object}
   * 
   */
  getCoinPrices = async coin => {
    const res = await api(`price?fsym=${coin}&tsyms=${data.currencies.join(',')}`);
    return res;
  };

  getAllCoinsPrices = async (coin, market) => {
    const res = await api(`pricemulti?fsyms=${coin}&tsyms=${data.currencies.join(',')}&e=${market}`);
    return res;
  };

  /**
   * Return full info about passed coin on passed market
   * 
   * @param {string} coin
   * @param {string} market
   * 
   * @return {object}
   */
  getCoinMarketInfo = async (coin, market) => {
    const res = await api(`generateAvg?fsym=${coin}&tsym=USD&e=${market}`);
    if (res.data['Response']) {
      throw new Error(res.data['Message']);
    }
    return res.data['Data'];
  };
}

export default new CryptoCompareService();
