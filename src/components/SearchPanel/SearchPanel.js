import React, { useState } from 'react';
import './SearchPanel.scss'


const SearchPanel = ({ }) => {
  const [term, setTerm] = useState('');

  const handleChange = e => {
    const term = e.target.value;
    setTerm(term);
  }

  return (
    <div className="search-panel">
      <input type="text" className="search-input" value={term} placeholder="Paste crypto" onChange={handleChange} />
    </div>
  );
};


export default SearchPanel;