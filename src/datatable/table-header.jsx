import React from 'react';

const toTitleCase = str =>
  str.replace(/\w\S*/g, txt => `${txt.charAt(0).toUpperCase()}${txt.substr(1)}`);

const TableHeader = ({
  id,
  column,
  ascending,
  setSortColumn,
  sortable,
  title
}) => {
  title = title || toTitleCase;
  const isSortable = sortable !== false && column !== undefined && ascending !== undefined;
  return (
    <th
      aria-sort={ isSortable ? (column === id ? (ascending ? 'ascending' : 'descending') : 'none') : undefined }
    >
      {
        isSortable
          ? <a href="#" onClick={(e) => {
            e.preventDefault();
            setSortColumn(id);
          }}>{ title(id) }</a>
          : title(id)
      }
    </th>
  );
};

export default TableHeader;
