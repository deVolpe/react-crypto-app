import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import styles from './CardsList.scss';

const Card = lazy(() => import('../../containers/CardContainer'));

export default class CardsList extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.cryptos.cards.length !== this.state.cards.length) {
      return true;
    }
    if (nextProps.filter.term !== this.props.filter.term) {
      return true;
    }
    return false;
  }

  render() {
    const {
      filter: { term }
    } = this.props;
    const { cards } = this.state;
    console.log(term);
    const filterCards = cards.filter(
      card => card.name.includes(term) || card.exchange.includes(term)
    );

    return (
      <div className={styles.list}>
        {filterCards.map(card => {
          const { _id: id } = card;
          const count = this.props.setCount(id);
          return (
            <div key={id} className={styles.card}>
              <Suspense fallback={<Spinner />}>
                <Card
                  {...card}
                  id={id}
                  handleDeleteCard={() => this.props.deleteCard(id)}
                  setCount={count}
                />
              </Suspense>
            </div>
          );
        })}
      </div>
    );
  }
}
