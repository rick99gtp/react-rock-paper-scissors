import "./Players.css";
import Player from "./Player";

const Players = (props) => {
  return (
    <div className="players">
      <Player playerType={1} choice={props.userChoice} />
      <Player playerType={0} choice={props.computerChoice} />
    </div>
  );
};

export default Players;