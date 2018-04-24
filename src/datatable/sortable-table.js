import { connect } from 'react-redux';
import Table from './table';
import { sortData } from './reducers';

const mapStateToProps = state => ({
  data: sortData(state),
  schema: state.table.schema
});

export default connect(
  mapStateToProps
)(Table);
