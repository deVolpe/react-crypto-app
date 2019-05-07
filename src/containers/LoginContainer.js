import { connect } from 'react-redux';

import Login from '../components/Login';

import { signIn } from '../modules/actions/auth';

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signIn }
)(Login);
