import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';

import { loginUser } from '../../modules/actions/auth';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
