import sortReducer from './sort';

describe('sortReducer', () => {
  test('returns the correct initial state', () => {
    const expected = {
      column: '',
      ascending: true
    };

    expect(sortReducer(undefined, {})).toEqual(expected);
  });

  describe('SET_SORT_COLUMN', () => {
    test('sets column to provided value, and ascending to true if previous column state is \'\'', () => {
      const initialState = { column: '', ascending: true };
      const action = { type: 'SET_SORT_COLUMN', column: 'a column' };
      const expected = { column: 'a column', ascending: true };

      expect(sortReducer(initialState, action)).toEqual(expected);
    });

    test('sets column to provided value, and ascending to true if previous column is different from new column', () => {
      const initialState = { column: 'a column', ascending: true };
      const action = { type: 'SET_SORT_COLUMN', column: 'b column' };
      const expected = { column: 'b column', ascending: true };

      expect(sortReducer(initialState, action)).toEqual(expected);
    });

    test('sets column to provided value, and ascending to false if previous column is the same as new column', () => {
      const initialState = { column: 'a column', ascending: true };
      const action = { type: 'SET_SORT_COLUMN', column: 'a column' };
      const expected = { column: 'a column', ascending: false };

      expect(sortReducer(initialState, action)).toEqual(expected);
    });
  });

  describe('SET_SORT', () => {
    test('sets state to provided value', () => {
      const sort = { column: 'a column', ascending: false };
      const action = { type: 'SET_SORT', sort };

      expect(sortReducer(undefined, action)).toEqual(sort);
    });
  });
});
