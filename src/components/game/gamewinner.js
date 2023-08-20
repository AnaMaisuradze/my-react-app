import React, {useContext} from "react";
import { GameContext } from "../../appcontext/gamecontext";
import Xicon from "../icons/x-icon";
import Oicon from "../icons/o-icon";

const Winner = () => {
    const { winner, handleNextRound, handleReset } = useContext(GameContext);

    return (
        <div className="score">
          {winner && winner !== "no" ? (
            <>
              <p>you won!</p>
              <h3
                className={`score-title ${
                  winner === "o" ? "text-yellow" : "text-blue"
                } `}
              >
                {winner === "x" && <Xicon />}
                {winner === "o" && <Oicon />}
                Takes the round
              </h3>
            </>
          ) : (
            <h3 className="score-title text-yellow">No Winner !</h3>
          )}
          <div className="score-btns">
            <button className="btn btn-small" onClick={handleReset}>
              Quit
            </button>
            <button
              className={`btn btn-small btn-yellow ${
                winner === "x" ? "btn-yellow" : "btn-blue"
              }`}
              onClick={handleNextRound}
            >
              Next Round
            </button>
          </div>
        </div>
      );        
}

export default Winner;