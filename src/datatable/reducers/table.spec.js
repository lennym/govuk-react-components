import tableReducer from './table';

describe('tableReducer', () => {
  test('returns the correct initial state', () => {
    const expected = {
      data: [],
      schema: {}
    };
    expect(tableReducer(undefined, {})).toEqual(expected);
  });

  describe('SET_DATA', () => {
    const initialState = {
      data: [],
      schema: {}
    };

    test('sets data to the value provided', () => {
      const data = [1, 2, 3];
      const action = { type: 'SET_DATA', data };
      expect(tableReducer(initialState, action)).toEqual({ ...initialState, data });
    });
  });

  describe('SET_SCHEMA', () => {
    const initialState = {
      data: [],
      schema: {}
    };

    test('sets schema to the value provided', () => {
      const schema = { a: {}, b: {}, c: {} };
      const action = { type: 'SET_SCHEMA', schema };
      expect(tableReducer(initialState, action)).toEqual({ ...initialState, schema });
    });
  });
});
