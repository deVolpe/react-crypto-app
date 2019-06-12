import _ from 'lodash';

/**
 * @description Return list of cards which is filtered by passed expression
 *
 * @param {object} cards
 * @param {string} term
 *
 * @return {object} filtered list
 */
export default function getFilteredCardsByTerm(cards, term) {
  if (_.isEmpty(term)) return cards;

  const _term = term.trim();

  const _cards = cards.filter((card) => {
    const { firstCoin, secondCoin, exchange } = card;
    return (
      firstCoin.includes(_term)
      || secondCoin.includes(_term)
      || exchange.includes(_term)
    );
  });
  return _cards;
}
