import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';

import { login } from '../../modules/actions/auth';

const mapStateToProps = state => ({
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
