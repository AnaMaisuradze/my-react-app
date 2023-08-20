import { createContext, useEffect, useState, useContext } from "react";
import { ModalContext } from "./modalcontext"; 
import calcBestMove, { calcWinner } from "../gamelogic/calculatemoves"; 

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start"); 
  const [playMode, setPlayMode] = useState("user"); 
  const [activeUser, setActiveUser] = useState("x"); 
  const [moves, setMoves] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });

  const { showModal, hideModal, setModalMode } = useContext(ModalContext);

  useEffect(() => {
    let currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextMove(moves);
    }
    checkNoWinner();
  }, [xnext, winner, screen]);

  const handleStart = (player) => {
    setPlayMode(player);
    setScreen("game");
  };

  const handleMoveClick = (ix) => {
    if (moves[ix] || winner) {
      return;
    }
    let currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }
    let ns = [...moves];
    ns[ix] = !xnext ? "x" : "o";
    setMoves(ns);
    setXnext(!xnext);
    checkWinner(ns);
  };

  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      const nties = { ...ties };
      nties[isWinner.winner] += 1;
      setTies(nties);
      showModal();
      setModalMode("winner");
    }
  };

  const cpuNextMove = (mvs) => {
    if (activeUser !== (xnext ? "x" : "o")) {
      return;
    }
  
    
    setTimeout(() => {
      let bestmove = calcBestMove(mvs, activeUser === "x" ? "o" : "x");
      let ns = [...moves];
      ns[bestmove] = activeUser === "x" ? "o" : "x";
      setMoves(ns);
      setXnext(!xnext);
      checkWinner(ns);
    }, 2000); 
  };
  

  const handleReset = () => {
    setMoves(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen("start");
  };

  const handleNextRound = () => {
    setMoves(new Array(9).fill(""));
    setXnext(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  };

  const checkNoWinner = () => {
    const moving = moves.filter((mv) => mv === "");
    if (moving.length === 0) {
      setWinner("no");
      showModal();
      setModalMode("winner");
    }
  };

  return (
    <GameContext.Provider
      value={{
        moves,
        winner,
        winnerLine,
        xnext,
        ties,
        screen,
        activeUser,
        playMode,
        handleStart,
        setActiveUser,
        setPlayMode,
        setTies,
        handleMoveClick,
        handleReset,
        handleNextRound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
