import { connect } from 'react-redux';

import Register from '../components/Register';
import { signUp } from '../modules/actions/auth';

const mapStateToProps = state => ({ error: state.error });

export default connect(
  mapStateToProps,
  { signUp },
)(Register);
