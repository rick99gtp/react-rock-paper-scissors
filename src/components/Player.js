import "./Player.css";
import Rock from "../rock.png";
import Paper from "../paper.png";
import Scissors from "../scissors.png";

const Player = (props) => {
  const choices = [Rock, Paper, Scissors];

  return (
    <div className="player">
      <img
        src={choices[props.choice]}
        className={props.playerType ? "player-style" : ""}
        alt="Choice"
      />
    </div>
  );
};

export default Player;
