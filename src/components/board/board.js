import React, {useContext} from 'react';
import Xicon from '../icons/x-icon';
import Oicon from '../icons/o-icon';
import BoardCard from './card';
import { GameContext } from '../../appcontext/gamecontext';
import { ModalContext } from '../../appcontext/modalcontext';

const Board = () => {
    const { showModal, setModalMode } = useContext(ModalContext);
    const handleRestart = () => {
        showModal();
        setModalMode("start");
    };

    const { moves, winner, winnerLine, xnext, ties, activeUser, playMode } =
    useContext(GameContext);

    const checkUser = (user) => {
        if (playMode === "cpu") {
          if (user === activeUser) {
            return "(you)";
          } else {
            return "(cpu)";
          }
        }
      };

    return <div className='board'>
        <div className='board-header'>
            <div>
               <Xicon/>
               <Oicon/>
            </div>
            <div className='board-turn'>
              {!xnext ? (
              <Xicon color="light"/>
              ) : (
              <Oicon color="light"/>
              )}
             turn
            </div>
            <div>
                <button className='btn btn-small board-restart'onClick={handleRestart}>
                <svg
                   aria-hidden="true"
                   focusable="false"
                   data-prefix="fas"
                   data-icon="redo"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512"
                 >
                <path
                   fill="currentColor"
                   d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
                 ></path>
                 </svg>
                </button>
            </div>
            
        </div>
        <div className='board-body'>
            {moves.map((move,ix)=>(
                <BoardCard
                 key={`${move}-${ix}`}
                 index={ix} 
                 user={move} 
                 active={winner && winnerLine && winnerLine.includes(ix)}/>
            ))}
        </div>
        <div className='board-footer'>
            <div className='card bg-blue'>
                <p className='text-light'>x{checkUser("x")}</p>
                <strong className="text-footer">{ties.x}</strong>
            </div>
            <div className='card bg-light'>
                <p className='text-light'>ties</p>
                <strong className="text-footer">{ties.x + ties.o}</strong>
            </div>
            <div className='card bg-yellow'>
                <p className='text-light'>o {checkUser("o")}</p>
                <strong className="text-footer">{ties.o}</strong>
            </div>
        </div>
    </div>
}

export default Board;