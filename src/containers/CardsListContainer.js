import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { setCount } from '../modules/actions/counter';
import { getAllCryptoCards, deleteCard } from '../modules/actions/crypto';

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  filter: state.filter
});

export default connect(
  mapStateToProps,
  { getAllCryptoCards, deleteCard, setCount }
)(CardsList);
