import "./Scores.css";

const Scores = (props) => {
  return (
    <div className="scores">
      <div id="player-score" className="score">
        0
      </div>
      <div id="computer-score" className="score">
        0
      </div>
    </div>
  );
};

export default Scores;
