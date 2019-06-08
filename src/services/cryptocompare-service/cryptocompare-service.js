import _ from 'lodash';

import api from './api';
import data from './data';
import getExistsDollarRepresentation from '../../utils/getExistsDollarRepresentation';

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
    return res.data.Data;
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
      `price?fsym=${coin}&tsyms=${_.values(data.usdTokens).join(',')}&e=${market}`,
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
    const dollar = await getExistsDollarRepresentation(coin, market);
    if (!dollar) {
      const err = `No data in ${market}`;
      throw err;
    }
    const res = await api(
      `pricemultifull?fsyms=${coin}&tsyms=${dollar}&e=${market}`,
    );
    return res.data.RAW[coin][dollar];
  };

  /**
   * Return daily historical data of passed coin's pair
   * @see 'https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday'
   * @param {string} coin
   * @param {string} dollar
   * @param {string} market
   *
   * @return {object}
   */
  getHistoricalData = async (coin, dollar, market) => {
    const res = await api(
      `histoday?fsym=${coin}&tsym=${dollar}&e=${market}&limit=10`,
    );
    return res.data.Data;
  };

  /**
   * Return exchange and it's coin couples
   * @see 'https://min-api.cryptocompare.com/documentation?key=Other&cat=allExchangesV2Endpoint'
   * @param {string} coin
   * @param {string} exchange
   *
   * @return {array} all coin couples
   */
  getAllTradingPairs = async (coin, market) => {
    const res = await api(`v2/all/exchanges?fsym=${coin}&e=${market}`);
    return res.data.Data[market].pairs[coin];
  };
}

export default new CryptoCompareService();
