import { connect } from 'react-redux';
import { getAllCryptoCards } from '../modules/actions/crypto';
import MainSection from '../components/MainSection';

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getAllCryptoCards },
)(MainSection);
