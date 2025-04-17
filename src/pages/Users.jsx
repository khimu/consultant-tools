// pages/Users.jsx
import React from 'react';
import { Table } from '../shared/Table';

const data = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

export function Users() {
  return (
    <div>
      <h1 className="h3 mb-4">Users</h1>
      <Table data={data} columns={["id", "name", "email"]} />
    </div>
  );
}
