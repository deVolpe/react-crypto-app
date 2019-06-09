import React from 'react';

import withSelect from './withSelect';
import compose from './compose';
import withService from './withService';
import withChildFunctions from './withChildFunctions';
import SelectItem from '../components/SelectItem';

const renderCoinLabel = selectCoin => (
  <label htmlFor={`select-${selectCoin}`}>{selectCoin}</label>
);

const renderExchangeLabel = selectExchange => (
  <label htmlFor={`select-${selectExchange}`}>{selectExchange}</label>
);

const renderCoinOptions = coins => Object.values(coins).map(coin => (
  <option key={+coin.Id} value={coin.Symbol}>
    {coin.FullName}
  </option>
));

const renderExchangeOptions = exchanges => Object.values(exchanges).map(market => (
  <option key={+market.Id} value={market.InternalName}>
    {market.Name}
  </option>
));

const mapCoinMethodsToProps = service => ({ getData: service.getAllCoins });

const mapExchangeMethodsToProps = service => ({
  getData: service.getAllExchanges,
});

const SelectCoin = compose(
  withService(mapCoinMethodsToProps),
  withSelect,
  withChildFunctions(renderCoinLabel, renderCoinOptions),
)(SelectItem);

const SelectExchange = compose(
  withService(mapExchangeMethodsToProps),
  withSelect,
  withChildFunctions(renderExchangeLabel, renderExchangeOptions),
)(SelectItem);

export { SelectCoin, SelectExchange };
