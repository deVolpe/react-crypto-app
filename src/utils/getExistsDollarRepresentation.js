import service from '../services/cryptocompare-service';
/**
 * @description Return dollar representation that is exist in passed exchange
 *
 * @param {string} coin
 * @param {string} exchange
 *
 * @return {string} valid dollar representation (for instance: USDT or TUSD)
 */

const getExistsDollarRepresentation = async (coin, exchange) => {
  const arr = await service.getAllTradingPairs(coin, exchange);
  const res = arr.join(',').match(/T?USDT?C?/);

  if (res.length) return res[0];
  return null;
};

export default getExistsDollarRepresentation;
