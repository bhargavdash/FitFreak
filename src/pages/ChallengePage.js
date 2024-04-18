// ChallengePage.js
import React from "react";
import ChallengeForm from "../components/Challenges/ChallengeForm";
import ChallengeList from "../components/Challenges/ChallengeList";
import "../styles/ChallengePage.css";

function ChallengePage({
  challenges,
  addChallenge,
  deleteChallenge,
  editChallenge,
}) {
  return (
    <div className="challenge-page">
      <h2>Challenges</h2>
      <ChallengeForm addChallenge={addChallenge} />
      <ChallengeList
        challenges={challenges}
        deleteChallenge={deleteChallenge}
        editChallenge={editChallenge}
      />
    </div>
  );
}

export default ChallengePage;
