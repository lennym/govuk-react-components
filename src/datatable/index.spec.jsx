import React from 'react';
import { shallow } from 'enzyme';
import DataTable from './';
import SortableTable from './containers/sortable-table';

describe('<DataTable />', () => {
  test('creates a store on init', () => {
    const wrapper = shallow(<DataTable />);
    expect(wrapper.instance().store).toBeDefined();
  });

  test('sets up initial state from props', () => {
    const data = [];
    const schema = {};
    const sort = {
      column: '',
      ascending: true
    };
    const wrapper = shallow(<DataTable data={data} schema={schema} sort={sort} />);
    expect(wrapper.instance().store.getState()).toEqual({ table: { data, schema }, sort })
  });

  test('renders a SortableTable element', () => {
    const wrapper = shallow(<DataTable />);
    expect(wrapper.find(SortableTable).length).toBe(1);
  });

  test('calls an onChange function, passing the sort from state when SET_SORT_COLUMN action is fired', () => {
    const fn = jest.fn();
    const wrapper = shallow(<DataTable onChange={fn} />);
    const action = {
      type: 'SET_SORT_COLUMN',
      column: 'A Column'
    };
    const expected = {
      column: 'A Column',
      ascending: true
    };
    wrapper.instance().store.dispatch(action);
    expect(fn.mock.calls[0][0]).toEqual(expected);
  });
});
