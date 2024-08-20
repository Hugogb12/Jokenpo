import React from 'react';

const PlayerChoice = ({ handlePlayerChoice }) => {
  return (
    <div className="player-choice">
      <h2>Choose your move:</h2>
      <button onClick={() => handlePlayerChoice('rock')}>Rock</button>
      <button onClick={() => handlePlayerChoice('paper')}>Paper</button>
      <button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
    </div>
  );
};

export default PlayerChoice;