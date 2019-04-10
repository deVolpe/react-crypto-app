import React, { useState } from 'react';

import SelectForm from '../SelectForm';

import './App.scss';

const App = () => {
  const [cryptoList, setCryptoList] = useState([]);

  function createCryptoItem(...data) {
    return {
      coin: data[0],
      market: data[1]
    };
  }

  const addNewCrypto = (...data) => {
    const newCard = createCryptoItem(...data);
    setCryptoList(prevList => [...prevList, newCard]);
  };

  return (
    <div className="app">
      <header className="header"></header>
      <section className="aside">
        <aside className="aside-bar">
          <div className="aside-bar__label">
            <h1 className="label">Add new Crypto</h1>
          </div>
          <div className="aside-bar__form">
            <SelectForm addNewCrypto={addNewCrypto} />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default App;
