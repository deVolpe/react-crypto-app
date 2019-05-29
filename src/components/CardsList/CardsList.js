import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '../../containers/CardContainer';

import styles from './CardsList.scss';

export default class CardsList extends PureComponent {
  static propTypes = {
    cryptos: PropTypes.shape({
      cards: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    filter: PropTypes.shape({
      term: PropTypes.string
    }).isRequired,
    getAllCryptoCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    setCount: PropTypes.func.isRequired
  };

  state = {
    cards: []
  };

  static getDerivedStateFromProps(props, state) {
    props.getAllCryptoCards();
    return {
      cards: props.cryptos.cards
    };
  }

  render() {
    const { filter: { term } } = this.props;
    const { cards } = this.state;
    const filterCards = cards.filter(
      card => card.name.includes(term) || card.exchange.includes(term)
    );

    return (
      <div className={styles.list}>
        {filterCards.map(card => {
          const { name, exchange, count, _id: id } = card;
          const countFunc = this.props.setCount(id);
          return (
            <div key={id} className={styles.card}>
              <Card
                name={name}
                exchange={exchange}
                count={count}
                handleDeleteCard={() => this.props.deleteCard(id)}
                countFunc={countFunc}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
