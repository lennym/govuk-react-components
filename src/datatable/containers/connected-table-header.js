import { connect } from 'react-redux';
import { setSortColumn } from '../actions'
import TableHeader from '../table-header';

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
