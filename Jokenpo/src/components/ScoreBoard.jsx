import React from 'react';

const ScoreBoard = ({ playerScore, computerScore, draws }) => {
  return (
    <div className="score-board">
      <h2>Placar:</h2>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
      <p>Empates: {draws}</p>
    </div>
  );
};