import rootReducer, { getSortedData } from './';
import schema from '../../../example/schema/places';

const data = [
  {
    site: 'Site A',
    suitability: ['AB', 'CD'],
    holding: ['AB'],
    area: '1st Floor',
    name: '1.24',
    number: 10,
    nacwo: {
      profile: {
        name: 'Zoe Ball'
      }
    }
  },
  {
    site: 'Site B',
    suitability: ['CD'],
    holding: ['CD', 'EF'],
    area: '2nd Floor',
    name: '12.11',
    number: 1,
    nacwo: {
      profile: {
        name: 'Sterling Archer'
      }
    }
  },
  {
    site: 'Site C',
    suitability: ['EF', 'GH'],
    holding: ['CD'],
    area: '3rd Floor',
    name: '1.11',
    number: 3,
    nacwo: {
      profile: {
        name: 'John Smith'
      }
    }
  }
];

describe('rootReducer', () => {
  test('returns the correct initial state', () => {
    const expected = {
      table: {
        data: [],
        schema: {}
      },
      sort: {
        column: '',
        ascending: true
      }
    };
    expect(rootReducer(undefined, {})).toEqual(expected);
  });
});

describe('getSortedData', () => {
  const state = {
    table: {
      data,
      schema
    }
  };

  test('sorts on text fields', () => {
    const sort = {
      column: 'site',
      ascending: true
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[0], data[1], data[2]])
  });

  test('sorts in descending order', () => {
    const sort = {
      column: 'site',
      ascending: false
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[2], data[1], data[0]])
  });

  test('sorts on numerical fields', () => {
    const sort = {
      column: 'number',
      ascending: true
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[1], data[2], data[0]])
  });

  test('sorts on string numerical fields', () => {
    const sort = {
      column: 'name',
      ascending: true
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[2], data[0], data[1]])
  });

  test('sorts descending string numerical fields', () => {
    const sort = {
      column: 'name',
      ascending: false
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[1], data[0], data[2]])
  });

  test('sorts on nested fields', () => {
    const sort = {
      column: 'nacwo',
      ascending: true
    };
    expect(getSortedData({ ...state, sort })).toEqual([data[2], data[1], data[0]])
  });
});
