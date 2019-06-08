import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import styles from './CardsList.scss';

const Card = lazy(() => import('../../containers/CardContainer'));

export default class CardsList extends Component {
  static propTypes = {
    cryptos: PropTypes.shape({
      cards: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    filter: PropTypes.shape({
      term: PropTypes.string,
    }).isRequired,
    getAllCryptoCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
  };

  state = {
    cards: [],
  };

  static getDerivedStateFromProps(props, state) {
    props.getAllCryptoCards();
    return {
      cards: props.cryptos.cards,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.cards.length !== nextState.cards.length) {
      return true;
    }
    if (this.props.filter.term !== nextProps.filter.term) {
      return true;
    }
    return false;
  }

  render() {
    const {
      filter: { term },
      deleteCard,
    } = this.props;
    const { cards } = this.state;
    const filterCards = cards.filter(
      card => card.name.includes(term) || card.exchange.includes(term),
    );

    return (
      <div className={styles.list}>
        {filterCards.map((card) => {
          const { _id: id } = card;
          return (
            <div key={id} className={styles.card}>
              <Suspense fallback={<Spinner />}>
                <Card
                  {...card}
                  id={id}
                  handleDeleteCard={() => deleteCard(id)}
                />
              </Suspense>
            </div>
          );
        })}
      </div>
    );
  }
}
