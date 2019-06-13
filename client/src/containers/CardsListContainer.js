import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { getAllCryptoCards, deleteCard } from '../modules/actions/crypto';

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  filter: state.filter,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getAllCryptoCards, deleteCard },
)(CardsList);
