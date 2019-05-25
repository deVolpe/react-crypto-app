import { connect } from 'react-redux';

import Login from '../components/Login';

import { signIn } from '../modules/actions/auth';

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { signIn },
)(Login);
