import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import WorkItems from './pages/WorkItems';
import Sprints from './pages/Sprints';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/work-items" element={<WorkItems />} />
          <Route path="/sprints" element={<Sprints />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Fallback routes for demo */}
          <Route path="/tasks" element={<Navigate to="/work-items" replace />} />
          <Route path="/bugs" element={<Navigate to="/work-items" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;