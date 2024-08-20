import React, { useState } from 'react';
import RockImage from './assets/imagens/Rock.png';
import PaperImage from './assets/imagens/Paper.png';
import ScissorsImage from './assets/imagens/Scissors.png';
import './App.css';

const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameResult, setGameResult] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[computerChoiceIndex]);
    determineGameResult(choice, choices[computerChoiceIndex]);

  };

  const determineGameResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setDraws(draws + 1);
      setGameResult('EMPATE!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      setPlayerScore(playerScore + 1);
      setGameResult('VOÇÊ VENCEU!');
    } else {
      setComputerScore(computerScore + 1);
      setGameResult('O COMPUTADOR VENCEU!');
    }
  };

  const handlePlayAgain = () => {
    setGameResult('');
    setPlayerChoice('');
    setComputerChoice('');
    setPlayerScore(0)
    setComputerScore(0)
    setDraws(0)
    
  };

  return (
    <div className="App">
      <h1>PEDRA, PAPEL <br /> E TESOURA</h1>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} draws={draws} />
      <GameResult gameResult={gameResult} />
      <PlayerChoice handlePlayerChoice={handlePlayerChoice} />
      <ComputerChoice computerChoice={computerChoice} />
      <PlayAgainButton handlePlayAgain={handlePlayAgain} />
    </div>
  );
}

const ScoreBoard = ({ playerScore, computerScore, draws }) => {
  return (
    <div className="score-board">
      <p>JOGADOR: {playerScore}</p>
      <p>COMPUTADOR: {computerScore}</p>
      <p>EMPATES: {draws}</p>
    </div>
  );
};

const GameResult = ({ gameResult }) => {
  return (
    <div className="game-result">
      <h2>{gameResult}</h2>
    </div>
  );
};

const PlayerChoice = ({ handlePlayerChoice }) => {
  return (
    <div className="player-choice">
      <h2 className='h21'>ESCOLHA SUA OPÇÃO:</h2>
      <button onClick={() => handlePlayerChoice('rock')}>
        <img className="imgRock" src={RockImage} alt="Pedra" />
      </button>
      <button onClick={() => handlePlayerChoice('paper')}>
        <img className="imgPaper" src={PaperImage} alt="Papel" />
      </button>
      <button onClick={() => handlePlayerChoice('scissors')}>
        <img className="imgSci" src={ScissorsImage} alt="Tesoura" />
      </button>
    </div>
  );
};

const ComputerChoice = ({ computerChoice }) => {
  return (
    <div className="computer-choice">
      
      <h2 className='h22'>OPÇÃO DO COMPUTADOR: </h2>
      
      {computerChoice === 'rock' && <img src={RockImage} alt="Pedra" />}
      {computerChoice === 'paper' && <img src={PaperImage} alt="Papel" />}
      {computerChoice === 'scissors' && <img src={ScissorsImage} alt="Tesoura" />}
      
    </div>
  );
};

const PlayAgainButton = ({ handlePlayAgain }) => {
  return (
    <div className="playAgainButton">
      <button onClick={handlePlayAgain}>JOGAR NOVAMENTE</button>
    </div>
  );
};
export default App;