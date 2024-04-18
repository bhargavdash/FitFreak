// components/ChallengeList.js

import React from 'react';

function ChallengeList({ challenges, deleteChallenge, editChallenge }) {
  return (
    <div className="challenge-list">
      <h2>My Challenges</h2>
      <ul>
        {challenges.map(challenge => (
          <li key={challenge.id}>
            <strong>{challenge.title}</strong> - {challenge.duration}
            <button onClick={() => editChallenge(challenge.id, { title: 'Updated Challenge' })}>Edit</button>
            <button onClick={() => deleteChallenge(challenge.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChallengeList;
