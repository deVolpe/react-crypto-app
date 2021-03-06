import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

const SearchPanel = ({ filter }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const _term = e.target.value;
    filter(_term);
    setTerm(_term);
  };

  return (
    <div className={styles.SearchPanel}>
      <input
        type="text"
        className={styles.input}
        placeholder="Paste crypto or market"
        value={term}
        onChange={handleChange}
      />
    </div>
  );
};

SearchPanel.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default SearchPanel;
