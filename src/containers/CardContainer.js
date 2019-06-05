import { connect } from 'react-redux';
import { getError } from '../modules/actions/error';
import Card from '../components/Card';

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  getError: err => dispatch(getError(err)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
