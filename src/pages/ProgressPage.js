// ProgressPage.js
import React from 'react';
import ProgressTracker from '../components/Progress/ProgressTracker';
import '../styles/ProgressPage.css';

function ProgressPage({ challenges }) {
  return (
    <div className="progress-page">
      <h2>Progress</h2>
      <ProgressTracker challenges={challenges} />
    </div>
  );
}

export default ProgressPage;
