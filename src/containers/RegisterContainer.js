import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Register from '../components/Register';
import { signUp } from '../modules/actions/auth';

const mapStateToProps = state => ({ errors: state.errors });

export default withRouter(
  connect(
    mapStateToProps,
    { signUp }
  )(Register)
);
