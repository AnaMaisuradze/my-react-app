import { useContext } from "react";
import Board from "./components/board/board";
import Start from "./components/start/start";
import GameOverLay from "./components/game/gameoverlay";


import { GameContext } from "./appcontext/gamecontext";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Start /> : <Board />}
      </div>
      <GameOverLay />
    </div>
  );
}

export default App;