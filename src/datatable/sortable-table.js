import { connect } from 'react-redux';
import { setSortColumn, setFilters } from './actions';
import Table from './table';

const mapStateToProps = state => ({
  data: state.data,
  ascending: state.sort.ascending,
  column: state.sort.column,
  schema: state.schema
});

export default connect(
  mapStateToProps,
  { setSortColumn, setFilters }
)(Table);
