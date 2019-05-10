import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import { getAllCryptoCards, deleteCard } from '../modules/actions/crypto';

const mapStateToProps = state => ({
  error: state.error,
  cryptos: state.cryptos
});

export default connect(
  mapStateToProps,
  { getAllCryptoCards, deleteCard }
)(CardsList);
