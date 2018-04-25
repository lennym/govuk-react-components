import React from 'react';
import { shallow } from 'enzyme';
import Table from './table';
import TableHeader from './containers/connected-table-header';

describe('<Table />', () => {
  test('throws an error if no data provided', () => {
    expect(() => {
      shallow(<Table />);
    }).toThrow('data must be provided');
  });

  test('renders a <TableHeader /> element for each column, taken from the first entry', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3 }
    ];
    const wrapper = shallow(<Table data={data} />);
    const tableHeaders = wrapper.find(TableHeader);
    expect(tableHeaders.length).toBe(4);
    Object.keys(data[0]).forEach((key, index) => {
      expect(tableHeaders.get(index).props.id).toBe(key);
    });
  });

  test('renders a <tr /> element for each row', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3 },
      { id: 2, site: 'A Site', name: 'The Name', number: 3 },
      { id: 3, site: 'A Site', name: 'The Name', number: 3 }
    ];
    const wrapper = shallow(<Table data={data} />);
    expect(wrapper.find('tbody tr').length).toBe(3);
  });

  test('renders a <td /> element for each key in each row', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3 },
      { id: 2, site: 'A Site', name: 'The Name', number: 3 },
      { id: 3, site: 'A Site', name: 'The Name', number: 3 }
    ];
    const wrapper = shallow(<Table data={data} />);
    expect(wrapper.find('tbody tr td').length).toBe(12);
  });

  test('only renders cols with show: true if schema provided', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3 }
    ];
    const schema = {
      id: {},
      site: { show: true },
      name: { show: true },
      number: { show: true }
    }
    const wrapper = shallow(<Table data={data} schema={schema} />);
    expect(wrapper.find('tbody tr td').length).toBe(3);
  });

  test('formats data if format function provided', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3 }
    ];
    const schema = {
      id: {},
      site: { show: true },
      name: { show: true },
      number: { show: true }
    }
    const formatters = {
      site: {
        format: text => text.toUpperCase()
      }
    };
    const wrapper = shallow(<Table data={data} schema={schema} formatters={formatters} />);
    expect(wrapper.find('tbody tr td').at(0).text()).toBe('A SITE');
  });

  test('accesses a deeply nested field if accessor provided', () => {
    const data = [
      { id: 1, site: 'A Site', name: 'The Name', number: 3, nacwo: { profile: { name: 'A Name' } } }
    ];
    const schema = {
      id: {},
      site: { show: true },
      name: { show: true },
      number: { show: true },
      nacwo: { show: true, accessor: 'nacwo.profile.name' }
    };
    const wrapper = shallow(<Table data={data} schema={schema} />);
    expect(wrapper.find('tbody tr td').at(3).text()).toBe('A Name');
  });
});
