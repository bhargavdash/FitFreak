// components/ChallengeForm.js

import React, { useState } from "react";

function ChallengeForm({ addChallenge }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !duration) return;
    addChallenge({ title, duration });
    setTitle("");
    setDuration("");
  };

  return (
    <div className="challenge-form">
      <h2>Add New Challenge</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Challenge Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Add Challenge</button>
      </form>
    </div>
  );
}

export default ChallengeForm;
