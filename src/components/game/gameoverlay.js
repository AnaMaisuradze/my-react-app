import React, {useContext} from "react";
import Winner from "./gamewinner";
import Restart from "./restart";
import { ModalContext } from "../../appcontext/modalcontext";

const GameOverLay = () => {
    const { show, modalModel } = useContext(ModalContext);
    return <div className={`game ${!show && "closed"}`}>
        <div className="game-content">
            <div className="container">
              {modalModel === "winner" && <Winner />}
              {modalModel === "start" && <Restart />}
            </div>
        </div>
    </div>
}


export default GameOverLay;