import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { SelectCoin, SelectExchange } from '../../hoc-components/ItemSelect';
import InvalidError from '../../pages/InvalidError';

import styles from './SelectForm.scss';

const SelectForm = memo(({ error: { conflict }, createCard }) => {
  const [first, setFirstCoin] = useState('');
  const [second, setSecondCoin] = useState('');
  const [exchange, setExchange] = useState('');
  const [invalid, setInvalid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      first,
      second,
      exchange,
    };
    createCard(card);
  };

  const handleFirstCoinSelect = (coin) => {
    setFirstCoin(coin);
  };

  const handleSecondCoinSelect = (coin) => {
    setSecondCoin(coin);
  };

  const handleMarketSelect = (exchange) => {
    setExchange(exchange);
  };

  const handleErrors = () => {
    if (conflict) {
      return <InvalidError error={conflict} />;
    }
    if (invalid) {
      return <InvalidError error={invalid} />;
    }
    return null;
  };

  const errors = handleErrors();

  return (
    <div className={styles.select}>
      {errors}
      <form onSubmit={handleSubmit}>
        <SelectCoin value={first} term="First coin" handleItemSelect={handleFirstCoinSelect} />
        <SelectCoin value={second} term="Second coin" handleItemSelect={handleSecondCoinSelect} />
        <SelectExchange
          value={exchange}
          term="Market"
          handleItemSelect={handleMarketSelect}
        />
        <button type="submit" className={styles.button}>
          Confirm
        </button>
      </form>
    </div>
  );
});

SelectForm.propTypes = {
  createCard: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SelectForm;
