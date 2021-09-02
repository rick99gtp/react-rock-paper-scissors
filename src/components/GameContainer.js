import "./GameContainer.css";
import Scores from "./Scores";
import Labels from "./Labels";
import Players from "./Players";
import WinnerMessage from './WinnerMessage';
import GameButtons from './GameButtons';
import { useState } from "react";

const GameContainer = () => {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState('');

  return (
    <div className="game-container">
      <Scores />
      <Labels />
      <Players userChoice={userChoice} computerChoice={computerChoice} />
      <WinnerMessage winnerMessage={winnerMessage} />
      {/* <UserButtons /> */}
      <GameButtons />
    </div>
  );
};

export default GameContainer;