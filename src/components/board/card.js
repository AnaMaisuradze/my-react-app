import React, {useContext} from 'react';
import { GameContext } from '../../appcontext/gamecontext';
import Xicon from '../icons/x-icon';
import Oicon from '../icons/o-icon';

const BoardCard = ({ active, user = "nouser", index }) => {
  const { handleMoveClick } = useContext(GameContext);
    return <div className={`card ${active && user === "x" && "shadow-blue"} ${
      active && user === "o" && "shadow-yellow"
    } ${active ? "active" : "shadow-gray"}`}onClick={() => handleMoveClick(index)}>
        {user === 'x' && <Xicon color={active && 'dark'} size='icon-large'/>}
        {user === 'o' && <Oicon color={active && 'dark'} size='icon-large'/>}
    </div>
}


export default BoardCard;