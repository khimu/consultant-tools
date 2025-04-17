// pages/CredentialRotation.jsx
import React from 'react';

const rotationData = [
  { id: 1, service: 'AWS RDS', frequency: 'Every 24 hours', status: 'Active' },
  { id: 2, service: 'MongoDB Atlas', frequency: 'Every 7 days', status: 'Pending' },
];

export function CredentialRotation() {
  return (
    <div>
      <h1 className="h3 mb-4">Credential Rotation Dashboard</h1>
      <p>Track and manage the automated rotation of secrets and credentials across your services.</p>
      <table className="table table-bordered table-hover bg-white mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Rotation Frequency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rotationData.map(({ id, service, frequency, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{service}</td>
              <td>{frequency}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

