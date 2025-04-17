// pages/Businesses.jsx
import React from 'react';
import { Table } from '../shared/Table';

const businesses = [
  { id: 1, name: 'TechCorp', hired: 'Jane Doe', needs: 'DevOps Engineer' },
  { id: 2, name: 'RetailPro', hired: 'John Smith', needs: 'Frontend Specialist' },
];

export function Businesses() {
  return (
    <div>
      <h1 className="h3 mb-4">Businesses</h1>
      <Table data={businesses} columns={["id", "name", "hired", "needs"]} />
    </div>
  );
}
