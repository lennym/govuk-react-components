import { connect } from 'react-redux';
import { getSortedData } from '../reducers';
import Table from '../table';

const mapStateToProps = state => ({
  data: getSortedData(state),
  schema: state.table.schema
});

export default connect(
  mapStateToProps
)(Table);
