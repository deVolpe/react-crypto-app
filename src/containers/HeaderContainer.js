import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { logout } from '../modules/actions/auth';

const mapStateToProps = state => ({ auth: state.auth });

export default withRouter(
  connect(
    mapStateToProps,
    { logout },
  )(Header),
);
