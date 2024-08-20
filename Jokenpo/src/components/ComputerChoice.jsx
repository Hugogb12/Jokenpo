import RockImage from './assets/imagens/Rock.png';
import PaperImage from './assets/imagens/Paper.png';
import ScissorsImage from './assets/imagens/Scissors.png';
import ComputerChoice from './components/ComputerChoice';
import React from 'react';

function ComputerChoice() {

  const ComputerChoice = ({ computerChoice }) => {
    return (
  
      
      <div className="computer-choice">
        <h2>Opção do computador:</h2>
        {computerChoice === 'rock' && <img src={RockImage} alt="Pedra" />}
        {computerChoice === 'paper' && <img src={PaperImage} alt="Papel" />}
        {computerChoice === 'scissors' && <img src={ScissorsImage} alt="Tesoura" />}
      </div>
    );
  };

} 

export default ComputerChoice