import { connect } from 'react-redux';
import TableHeader from './table-header';
import { setSortColumn } from './actions'

const mapStateToProps = ({
  sort: {
    column,
    ascending
  }
}, {
  sortable,
  title
}) => ({
  column,
  ascending,
  sortable,
  title
});

export default connect(
  mapStateToProps,
  { setSortColumn }
)(TableHeader);
