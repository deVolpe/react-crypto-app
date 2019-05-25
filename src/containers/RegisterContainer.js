import { connect } from 'react-redux';

import Register from '../components/Register';
import { signUp } from '../modules/actions/auth';

const mapStateToProps = state => ({ error: state.error, auth: state.auth });

export default connect(
  mapStateToProps,
  { signUp },
)(Register);
