import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { startCase, upperCase } from 'lodash';

import { SelectCoin, SelectExchange } from '../../hoc-components/SelectItem';
import InvalidError from '../../pages/InvalidError';

import styles from './SelectForm.scss';

const SelectForm = memo(({ error: { conflict }, createCard, service }) => {
  const [first, setFirstCoin] = useState('');
  const [second, setSecondCoin] = useState('');
  const [exchange, setExchange] = useState('');
  const [invalid, setInvalid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      first: upperCase(first),
      second: upperCase(second),
      exchange: startCase(exchange),
    };
    service.isExist(card.first, card.second, card.exchange).then(() => {
      setInvalid('');
      createCard(card);
    }).catch(setInvalid);
  };

  const handleErrors = (conflict, invalid) => {
    if (conflict) {
      return <InvalidError error={conflict} />;
    }
    if (invalid) {
      return <InvalidError error={invalid} />;
    }
    return null;
  };

  const errors = handleErrors(conflict, invalid);

  return (
    <div className={styles.select}>
      {errors}
      <form onSubmit={handleSubmit}>
        <SelectCoin value={first} term="First coin" handleItemSelect={setFirstCoin} />
        <SelectCoin value={second} term="Second coin" handleItemSelect={setSecondCoin} />
        <SelectExchange
          value={exchange}
          term="Market"
          handleItemSelect={setExchange}
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
