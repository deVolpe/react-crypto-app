import React, { useState } from 'react';
import styles from './SearchPanel.scss';

const SearchPanel = ({}) => {
  const [term, setTerm] = useState('');

  const handleChange = e => {
    const term = e.target.value;
    setTerm(term);
  };

  return (
    <div className={styles.SearchPanel}>
      <input
        type="text"
        className={styles.input}
        value={term}
        placeholder="Paste crypto"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchPanel;
