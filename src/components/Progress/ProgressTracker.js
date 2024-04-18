// components/ProgressTracker.js

import React from "react";

function ProgressTracker({ challenges }) {
  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <strong>{challenge.title}</strong> - Progress:{" "}
            {Math.floor(Math.random() * 100)}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressTracker;
