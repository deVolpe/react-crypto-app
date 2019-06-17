import React from 'react';
import { values, map } from 'lodash';

import withSelect from './withSelect';
import compose from '../Features/compose';
import withService from '../Features/withService';
import withChildFunctions from '../Features/withChildFunctions';
import SelectItem from '../../components/SelectItem';

const renderCoinLabel = selectCoin => (
  <label htmlFor={`select-${selectCoin}`}>{selectCoin}</label>
);

const renderExchangeLabel = selectExchange => (
  <label htmlFor={`select-${selectExchange}`}>{selectExchange}</label>
);

const renderCoinOptions = coins => map(values(coins), coin => (
  <option key={+coin.Id} value={coin.Symbol}>
    {coin.FullName}
  </option>
));

const renderExchangeOptions = exchanges => map(values(exchanges), market => (
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
