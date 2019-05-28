import api from './api';
import data from './data';

class CryptoCompareService {
  /**
   * Returns all coins that are available with full info about them.
   *
   * @see 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allCoinsWithContentEndpoint'
   * @return {object}
   *
   */
  getAllCoins = async () => {
    const res = await api('all/coinlist');
    return res.data.Data;
  };

  /**
   * Returns all exchanges that are available
   * @see 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allExchangesStaticInfoEndpoint'.
   *
   * @return {object}
   *
   */
  getAllExchanges = async () => {
    const res = await api('exchanges/general');
    return await res.data.Data;
  };

  /**
   * Returns the fiat currencies of passed coin.
   *
   * @see 'https://min-api.cryptocompare.com/documentation?key=Price&cat=SingleSymbolPriceEndpoint'
   * @param {string} coin
   * @param {string} market
   *
   * @return {object}
   *
   */
  getCoinPrices = async (coin, market) => {
    const res = await api(
      `price?fsym=${coin}&tsyms=USDT&e=${market}`,
    );
    if (res.data.Response) {
      throw res.data.Message;
    }
    return res.data;
  };

  /**
   * Return full info about passed coin's pair on passed market.
   *
   * @see 'https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint'
   * @param {string} coin
   * @param {string} market
   *
   * @return {object}
   */
  getCoinMarketInfo = async (coin, market) => {
    const res = await api(
      `pricemultifull?fsyms=${coin}&tsyms=USDT&e=${market}`,
    );
    return res.data.RAW[coin].USDT;
  };

  /**
   * Return daily historical data of passed coin's pair
   * @see 'https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday'
   * @param {string} first
   * @param {string} second
   * @param {string} market
   *
   * @return {object}
   */
  getHistoricalData = async (first, market) => {
    const res = await api(
      `histoday?fsym=${first}&tsym=${second}&e=${market}&limit=10`,
    );
    return res.data.DATA;
  };
}

export default new CryptoCompareService();
