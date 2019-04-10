import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectExchange from '../SelectExchange';
import SelectCoin from '../SelectCoin';

const SelectForm = ({ addNewCrypto }) => {
  const [coin, setCoin] = useState('');
  const [market, setMarket] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNewCrypto(coin, market);
  };

  const handleCoinChange = coin => {
    setCoin(coin);
  };

  const handleMarketChange = market => {
    setMarket(market);
  };

  return (
    <div className="select">
      <form className="select-form" onSubmit={handleSubmit}>
        <SelectCoin handleCoinChange={handleCoinChange} />
        <SelectExchange handleMarketChange={handleMarketChange} />
        <button className="button">Confirm</button>
      </form>
    </div>
  );
};

SelectForm.defaultPops = {
  addNewCrypto: () => {}
};

SelectForm.propTypes = {
  addNewCrypto: PropTypes.func.isRequired
};

export default SelectForm;
