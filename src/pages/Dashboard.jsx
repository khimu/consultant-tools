// pages/Dashboard.jsx
import React from 'react';

export function Dashboard() {
  return (
    <div>
      <h1 className="h3 mb-4">Dashboard</h1>
      <div className="row">
        <StatCard label="Users" value="1,024" />
        <StatCard label="Sales" value="$23,456" />
        <StatCard label="Growth" value="+12%" />
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <p className="text-muted small mb-1">{label}</p>
          <h5 className="card-title">{value}</h5>
        </div>
      </div>
    </div>
  );
}

