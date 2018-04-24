import React from 'react';
import { map, merge, pickBy, get, isEmpty } from 'lodash';
import TableHeader from './containers/connected-table-header';

const Table = ({
  data,
  schema,
  formatters
} = {}) => {
  const columns = !isEmpty(schema)
    ? merge({}, pickBy(schema, v => v.show), formatters)
    : Object.keys(data[0]).reduce((obj, key) => ({ ...obj, [key]: {} }), {});
  return (
    <table className="govuk-react-datatable">
      <thead>
        <tr>
          {
            map(columns, (column, key) =>
              <TableHeader key={key} id={key} { ...column } />
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(row => (
            <tr key={row.id}>
              {
                map(columns, ({ format, accessor }, key) => {
                  const datum = get(row, accessor || key);
                  return <td key={key}>{ format ? format(datum, row[key]) : datum }</td>;
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

module.exports = Table;
