import { connect } from 'react-redux';

import SearchPanel from '../components/SearchPanel';
import { filter } from '../modules/actions/filter';

const mapDispatchToProps = dispatch => ({
  filter: term => dispatch(filter(term)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchPanel);
