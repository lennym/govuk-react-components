# DataTable

## Simple Usage

```js
const data = [
  { id: 1, site: 'Site A', name: 'A Name' },
  { id: 2, site: 'Site B', name: 'A Name' },
  { id: 3, site: 'Site C', name: 'A Name' }
];

ReactDOM.render(
  <DataTable data={data} />,
  document.getElementById('root')
);
```
For a simple sortable table, the only required attribute is `data`. The column headers are assumed from the keys of the first entry. These are transformed with a titlecase function by default.  For more customisation options see below:

## Custom Schema

```js
const data = [
  { id: 1, site: 'Site A', name: 'A Name', list: ['a', 'b', 'c'], deep: { nested: { field: 1 } } },
  { id: 2, site: 'Site B', name: 'A Name', list: ['d', 'e', 'f'], deep: { nested: { field: 2 } } },
  { id: 3, site: 'Site C', name: 'A Name', list: ['g', 'h', 'i'], deep: { nested: { field: 3 } } }
];

const schema = {
  id: {}, // will not be displayed
  site: {
    show: true // if schema is provided, all visible fields must have show: true
  },
  name: {
    show: true
  },
  list: {
    show: true,
    sortable: false // column will not be sortable
  },
  deep: {
    show: true,
    accessor: 'deep.nested.field' // the path for deep nested fields
  }
};

const formatters = {
  site: {
    title: val => val.toUpperCase() // transforms the 'site' column heading
  },
  list: {
    format: arr => arr.join(', ') // transforms every 'list' value
  }
};

ReactDOM.render(
  <DataTable data={data} schema={schema} formatters={formatters} />,
  document.getElementById('root')
);

```

## API

Provide an `onChange` function in order to subscribe to changes to sort column or order

```js
ReactDOM.render(
  <DataTable
    data={data}
    onChange={(sort) => {
      console.log('sort.column: ', sort.column, 'sort.ascending: ', sort.ascending);
    }} />
)
```

Provide an initial state for sort to be persisted

```js
const sort = {
  column: 'site', // column to sort
  ascending: true // Boolean direction flag
};

ReactDOM.render(
  <DataTable
    data={data}
    sort={sort} />
)
```
