import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectExchange from '../SelectExchange';
import SelectCoin from '../SelectCoin';
import InvalidError from '../../pages/InvalidError';
import service from '../../services/cryptocompare-service';

import styles from './SelectForm.scss';

const SelectForm = ({ error: { conflict }, createCard }) => {
  const [coin, setCoin] = useState('BTC');
  const [exchange, setExchange] = useState('Binance');
  const [invalid, setInvalid] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const card = {
      coin,
      exchange
    };
    service
      .getCoinPrices(card.coin, card.exchange)
      .then(() => {
        createCard(card);
      })
      .catch(setInvalid);
  };

  const handleCoinSelect = coin => {
    setCoin(coin);
  };

  const handleMarketSelect = exchange => {
    setExchange(exchange);
  };

  const invalidError = invalid ? <InvalidError error={invalid} /> : null;
  const conflictError = conflict ? <InvalidError error={conflict} /> : null;

  return (
    <div className={styles.select}>
      {conflictError || invalidError}
      <form onSubmit={handleSubmit}>
        <SelectCoin value={coin} handleCoinSelect={handleCoinSelect} />
        <SelectExchange
          value={exchange}
          handleMarketSelect={handleMarketSelect}
        />
        <button type="submit" className={styles.button}>
          Confirm
        </button>
      </form>
    </div>
  );
};

SelectForm.propTypes = {
  createCard: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SelectForm;
