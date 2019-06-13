import { connect } from 'react-redux';

import SelectForm from '../components/SelectForm';
import { createCard } from '../modules/actions/crypto';

const mapStateToProps = state => ({ error: state.error });

export default connect(
  mapStateToProps,
  { createCard },
)(SelectForm);
