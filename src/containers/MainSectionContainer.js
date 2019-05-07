import { connect } from 'react-redux';
import MainSection from '../components/MainSection';

const mapStateToProps = state => ({
  auth: state.auth,
  cancel: state.cancel
});

export default connect(
  mapStateToProps,
  null
)(MainSection);
