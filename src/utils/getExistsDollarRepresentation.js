import service from '../services/cryptocompare-service';
/**
 * @description Return dollar representation that is exist in passed exchange
 *
 * @param {string} coin
 * @param {string} exchange
 *
 * @return {string} valid dollar representation (for instance: USDT or TUSD)
 */

export const getExistsDollarRepresentation = (coin, exchange) => {
  service.getCoinPrices(coin, market);
};
