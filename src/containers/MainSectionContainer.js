import { connect } from 'react-redux';
import MainSection from '../components/MainSection';

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  null,
)(MainSection);
