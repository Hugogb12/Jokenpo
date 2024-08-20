import React from 'react';

const PlayAgainButton = ({ handlePlayAgain }) => {
  return (
    <div className="play-again-button">
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default PlayAgainButton;