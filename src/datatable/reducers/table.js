const INITIAL_STATE = {
  data: [],
  schema: {}
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.data
      }
    case 'SET_SCHEMA':
      return {
        ...state,
        schema: action.schema
      }
  }
  return state;
};

export default dataReducer;
