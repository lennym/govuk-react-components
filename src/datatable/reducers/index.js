import { sortBy, get } from 'lodash';

const INITIAL_STATE = {
  sort: {
    ascending: true,
    column: ''
  },
  data: [],
  schema: {}
};

const sortData = ({ data, schema, sort: { ascending, column } }) => {
  if (!column) {
    return data;
  }
  const arr = sortBy(data, item => get(item, schema[column] && schema[column].accessor || column));
  return ascending ? arr : arr.reverse();
};

const sortReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT_COLUMN':
      return {
        column: action.column,
        ascending: state.column === action.column ? !state.ascending : true
      };
  }
  return state;
};

const handleTableActions = (state, action) => {
  let sort;
  switch (action.type) {
    case 'SET_SCHEMA':
      return {
        ...state,
        schema: action.schema
      };
    case 'SET_DATA':
      return {
        ...state,
        data: sortData({ ...state, data: action.data })
      };
    case 'SET_SORT':
      sort = {
        column: action.sort.column,
        ascending: JSON.parse(action.sort.ascending)
      };
      return {
        ...state,
        sort,
        data: sortData({ ...state, sort })
      };
    case 'SET_SORT_COLUMN':
      sort = sortReducer(state.sort, action);
      return {
        ...state,
        sort,
        data: sortData({ ...state, sort })
      };
  }
  return state;
};

const tableReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  ...handleTableActions(state, action)
});

export default tableReducer;
