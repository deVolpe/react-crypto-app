import { connect } from 'react-redux';

import SelectForm from '../components/SelectForm';
import { createCard } from '../modules/actions/cryptoCard';

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
  mapStateToProps,
  { createCard }
)(SelectForm);
