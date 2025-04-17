// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';
import { Consultants } from './pages/Consultants';
import { Businesses } from './pages/Businesses';
import { CredentialRotation } from './pages/CredentialRotation';
import { ProjectSummary } from './pages/ProjectSummary';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex vh-100">
        <aside className="bg-dark text-white p-4" style={{ width: '250px' }}>
          <h2 className="h4 mb-4">Admin Panel</h2>
          <nav className="nav flex-column">
	    <Link to="/" className="nav-link text-white">ProjectSummary</Link>
            <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
            <Link to="/users" className="nav-link text-white">Users</Link>
            <Link to="/consultants" className="nav-link text-white">Consultants</Link>
            <Link to="/businesses" className="nav-link text-white">Businesses</Link>
            <Link to="/credential-rotation" className="nav-link text-white">Credential Rotation</Link>
            <Link to="/settings" className="nav-link text-white">Settings</Link>
          </nav>
        </aside>
        <main className="flex-grow-1 bg-light p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<ProjectSummary />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/credential-rotation" element={<CredentialRotation />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
