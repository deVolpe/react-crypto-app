import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
