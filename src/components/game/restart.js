import React, {useContext} from "react";
import { GameContext } from "../../appcontext/gamecontext";
import { ModalContext } from "../../appcontext/modalcontext";

const Restart = () => {
  const { hideModal } = useContext(ModalContext);
  const { handleReset } = useContext(GameContext);
    return (<div className="restart">
        <h3 className="restart-title">Restart game?</h3>
        <div className="restart-btns">
          <button className="btn btn-small"  onClick={hideModal}>
             no, cancal
           </button>
          <button className="btn btn-yellow btn-small" onClick={handleReset}>
             yes, restart
           </button>
        </div>
    </div>);
}

export default Restart;