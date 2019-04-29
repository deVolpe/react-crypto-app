import React from 'react';

import Card from '../Card';

const CardsList = ({ cardsList, handleDeleteCard }) => {
  const cards = cardsList.map(card => {
    const { name, exchange, count, id } = card;
    return (
      <div key={id} className="card">
        <Card
          name={name}
          exchange={exchange}
          count={count}
          handleDeleteCard={() => handleDeleteCard(id)}
        />
      </div>
    );
  });

  return <div className="cards-list">{cards}</div>;
};
