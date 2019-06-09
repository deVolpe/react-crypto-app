import React, { PureComponent, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { ServiceContextConsumer } from '../App/ServiceContext';

import styles from './CardsList.scss';

const Card = lazy(() => import('../../containers/CardContainer'));

export default class CardsList extends PureComponent {
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

  state = { cards: [] };

  static getDerivedStateFromProps(props) {
    props.getAllCryptoCards();
    return {
      cards: props.cryptos.cards,
    };
  }

  render() {
    const {
      filter: { term },
      deleteCard,
    } = this.props;
    const { cards } = this.state;
    const filterCards = cards.filter((card) => {
      const { firstCoin, secondCoin, exchange } = card;
      return (
        firstCoin.includes(term)
        || secondCoin.includes(term)
        || exchange.includes(term)
      );
    });

    return (
      <div className={styles.list}>
        {filterCards.map((card) => {
          const { _id: id } = card;
          return (
            <div key={id} className={styles.card}>
              <Suspense fallback={<Spinner />}>
                <ServiceContextConsumer>
                  {service => (
                    <Card
                      {...card}
                      service={service}
                      handleDeleteCard={() => deleteCard(id)}
                    />
                  )}
                </ServiceContextConsumer>
              </Suspense>
            </div>
          );
        })}
      </div>
    );
  }
}
