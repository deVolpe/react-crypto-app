import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

export default class CardsList extends PureComponent {
  static propTypes = {
    errors: PropTypes.string,
    cryptos: PropTypes.object,
    getAllCryptoCards: PropTypes.func,
    deleteCard: PropTypes.func
  };

  componentDidMount() {
    // this.props.getAllCryptoCards();
  }

  render() {
    const { errors } = this.props;
    return errors ? (
      <span className={styles.errors}>{errors}</span>
    ) : (
      <div className="cards-list">
        {/* {cards.map(card => {
          const { name, exchange, count, id } = card;
          return (
            <div key={id} className="card">
              <Card
                name={name}
                exchange={exchange}
                count={count}
                handleDeleteCard={() => deleteCard(id)}
              />
            </div>
          );
        })} */}
      </div>
    );
  }
}
