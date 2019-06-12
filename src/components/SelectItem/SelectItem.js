import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select';

import getValidIdFromString from '../../utils/getValidIdFromString';
import getFirstWordFromString from '../../utils/getFirstWordFromString';

import styles from './SelectItem.scss';

const SelectItem = ({
  data,
  handleSelect,
  value,
  children: [renderLabel, renderOptions],
  term,
}) => {
  const label = renderLabel(term);
  const options = renderOptions(data);

  const id = getValidIdFromString(term);
  const listId = `${getFirstWordFromString(term)}s`;

  return (
    <div className={styles.selectItem}>
      {label}
      <input
        list={listId}
        placeholder={`Select ${term} you want`}
        value={value}
        id={id}
        onChange={handleSelect}
        className={styles.select}
      />
      <datalist id={listId}>{options}</datalist>
    </div>
  );
};

SelectItem.defaultProps = {
  value: '',
  handleSelect: () => {},
  data: null,
  children: null,
  term: '',
};
SelectItem.propTypes = {
  handleSelect: PropTypes.func,
  value: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.func),
  term: PropTypes.string,
};


export default SelectItem;
