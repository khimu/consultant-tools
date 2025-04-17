// shared/Table.jsx
import React from 'react';

export function Table({ data, columns }) {
  return (
    <table className="table table-bordered table-hover bg-white">
      <thead className="table-light">
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-capitalize">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
