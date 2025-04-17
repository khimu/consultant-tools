// pages/ProjectSummary.jsx
import React from 'react';

export function ProjectSummary() {
  return (
    <div>
      <h1 className="h3 mb-4">React Dashboard Project</h1>
      <p>This ReactJS application was built in under 2 hours as a rapid prototype to demonstrate a modular admin dashboard with reusable components, Bootstrap styling, and modern React features like routing and hooks.</p>

      <h4 className="mt-4">🔗 Source Code</h4>
      <p>GitHub Repository: <a href="https://github.com/khimu/consultant-tools" target="_blank" rel="noopener noreferrer">github.com/khimu/consultant-tools</a></p>

      <h4 className="mt-4">🚀 Deployment</h4>
      <p>Live at: <a href="https://dev.distributedjava.com" target="_blank" rel="noopener noreferrer">dev.distributedjava.com</a></p>

      <h4 className="mt-4">🛠 Installation Steps</h4>
      <ol>
        <li><strong>Install dependencies:</strong><br /><code>npm install</code></li>
        <li className="mt-2"><strong>Build the app:</strong><br /><code>npm run build</code></li>
        <li className="mt-2"><strong>Serve locally:</strong><br /><code>npx serve -s build</code></li>
      </ol>

      <h4 className="mt-5">📦 Popular ReactJS Libraries</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>✅ React Router:</strong> Client-side routing<br /><code>npm install react-router-dom</code></li>
        <li className="list-group-item"><strong>✅ Axios:</strong> HTTP requests made simple<br /><code>npm install axios</code></li>
        <li className="list-group-item"><strong>React Query:</strong> Async state & caching<br /><code>npm install @tanstack/react-query</code></li>
        <li className="list-group-item"><strong>Formik:</strong> Form state + validation<br /><code>npm install formik</code></li>
        <li className="list-group-item"><strong>Recharts:</strong> Beautiful charts & graphs<br /><code>npm install recharts</code></li>
        <li className="list-group-item"><strong>React Hook Form:</strong> Fast, minimal forms<br /><code>npm install react-hook-form</code></li>
      </ul>

      <h4 className="mt-5">🧠 Local Caching in React</h4>
      <p>React apps can use <code>localStorage</code> or <code>sessionStorage</code> to persist data across reloads:</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>localStorage:</strong> Persistent, cross-session<br /><code>localStorage.setItem('theme', 'dark');</code></li>
        <li className="list-group-item"><strong>sessionStorage:</strong> Cleared when tab closes</li>
        <li className="list-group-item">
          <strong>Hydration Example:</strong>
          <pre><code>{`useEffect(() => {
  const data = localStorage.getItem('rotationData');
  if (data) setState(JSON.parse(data));
}, []);`}</code></pre>
        </li>
      </ul>

      <h4 className="mt-5">🌐 AJAX Call to API Gateway</h4>
      <p>Use Axios to connect to AWS API Gateway and fetch data dynamically:</p>
      <pre><code>{`useEffect(() => {
  axios.get('https://your-api-id.execute-api.us-west-2.amazonaws.com/prod/rotation')
    .then(response => setData(response.data))
    .catch(error => console.error('API call failed:', error));
}, []);`}</code></pre>

      <h4 className="mt-5">⚛️ Example: useState and useEffect</h4>
      <p>This sample component uses React state and effects to show dynamic data loading from an API.</p>
      <pre><code>{`import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ExamplePage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('https://api.example.com/status')
      .then(response => {
        setMessage(response.data.status);
      })
      .catch(() => {
        setMessage('Error fetching data');
      });
  }, []);

  return (
    <div>
      <h1>Status Check</h1>
      <p>{message}</p>
    </div>
  );
}`}</code></pre>

      <p><strong>Expected Output:</strong></p>
      <p><u>Before API resolves:</u></p>
      <pre><code>{`<p>Loading...</p>`}</code></pre>
      <p><u>After successful response:</u></p>
      <pre><code>{`<p>All good</p>`}</code></pre>
      <p><u>On failure:</u></p>
      <pre><code>{`<p>Error fetching data</p>`}</code></pre>
    </div>
  );
}


