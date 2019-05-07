import { connect } from 'react-redux';

import Register from '../components/Register';
import { signUp } from '../modules/actions/auth';

const mapStateToProps = state => ({ errors: state.errors, auth: state.auth });

export default connect(
  mapStateToProps,
  { signUp }
)(Register);
