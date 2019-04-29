import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectExchange from '../SelectExchange';
import SelectCoin from '../SelectCoin';

const SelectForm = ({ errors, createCard }) => {
  const [name, setName] = useState('');
  const [market, setMarket] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const coin = {
      name,
      market
    };
    createCard(coin);
  };

  const handleCoinChange = name => {
    setName(name);
  };

  const handleMarketChange = market => {
    setMarket(market);
  };


  const errorMessage = errors ? <div className="error-block">{errors}</div> : null;

  return (
    <div className="select">
      {errorMessage}
      <form className="select-form" onSubmit={handleSubmit}>
        <SelectCoin handleCoinChange={handleCoinChange} />
        <SelectExchange handleMarketChange={handleMarketChange} />
        <button className="button">Confirm</button>
      </form>
    </div>
  );
};

SelectForm.propTypes = {
  createCard: PropTypes.func.isRequired
};

export default SelectForm;
