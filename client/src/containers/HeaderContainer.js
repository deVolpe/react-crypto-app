import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../modules/actions/auth';

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { logout },
)(Header);
