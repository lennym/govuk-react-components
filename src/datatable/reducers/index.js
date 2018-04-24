import { combineReducers } from 'redux';
import { orderBy, get } from 'lodash';
import table from './table';
import sort from './sort'

export const sortData = ({ table: { data, schema }, sort: { ascending, column } }) =>
  column
    ? orderBy(data, item =>
      get(item, schema[column] && schema[column].accessor || column),
      ascending ? 'asc' : 'desc')
    : data;

export default combineReducers({
  table,
  sort
});
