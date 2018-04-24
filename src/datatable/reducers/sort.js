const INITIAL_STATE = {
  column: '',
  ascending: true
};

const sortReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_SORT_COLUMN':
      return {
        column: action.column,
        ascending: state.column === action.column ? !state.ascending : true
      };
    case 'SET_SORT':
      return {
        column: action.sort.column,
        ascending: JSON.parse(action.sort.ascending)
      };
  }
  return state;
};

export default sortReducer;
