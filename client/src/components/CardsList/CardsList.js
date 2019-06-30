import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CardChart from '../CardChart';
import Card from '../../containers/CardContainer';
import { ServiceContextConsumer } from '../App/ServiceContext';
import getFilteredCardsByTerm from '../../utils/getFilteredCardsByTerm';

import styles from './CardsList.scss';

export default class CardsList extends PureComponent {
  static propTypes = {
    cryptos: PropTypes.shape({
      cards: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    filter: PropTypes.shape({
      term: PropTypes.string,
    }).isRequired,
    deleteCard: PropTypes.func.isRequired,
    getAllCryptoCards: PropTypes.func.isRequired,
  };

  state = { cards: this.props.cryptos.cards };

  static getDerivedStateFromProps(props) {
    if (!props.cryptos.cards.length) {
      props.getAllCryptoCards();
    }
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
    const filterCards = getFilteredCardsByTerm(cards, term);

    return (
      <div className={styles.list}>
        {filterCards.map((card) => {
          const { _id: id } = card;
          return (
            <div key={id} className={styles.card}>
              <ServiceContextConsumer>
                {service => (
                  <Card
                    {...card}
                    service={service}
                    handleDeleteCard={() => deleteCard(id)}
                    render={({
                      firstCoinSymbol,
                      secondCoinSymbol,
                      exchange,
                      currIndex,
                    }) => (
                      <CardChart
                        first={firstCoinSymbol}
                        second={secondCoinSymbol}
                        exchange={exchange}
                        index={currIndex}
                        service={service}
                      />
                    )}
                  />
                )}
              </ServiceContextConsumer>
            </div>
          );
        })}
      </div>
    );
  }
}
