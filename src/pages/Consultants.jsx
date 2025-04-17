// pages/Consultants.jsx
import React from 'react';
import { Table } from '../shared/Table';

const consultants = [
  { id: 1, name: 'Jane Doe', rating: 4.8, reviews: 15 },
  { id: 2, name: 'John Smith', rating: 4.5, reviews: 9 },
];

export function Consultants() {
  return (
    <div>
      <h1 className="h3 mb-4">Consultants</h1>
      <Table data={consultants} columns={["id", "name", "rating", "reviews"]} />
    </div>
  );
}
