import React, {useContext}from 'react';
import { GameContext } from '../../appcontext/gamecontext';
import Xicon from '../icons/x-icon';
import Oicon from '../icons/o-icon';


const Start = () => {
    const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

    return <div className='start'>
        <div className='header-start'>
            <Xicon/>
            <Oicon/>
        </div>
        <div className='card shadow-gray'>
            <h1 className='pick-mark'>Pick player 1'st mark</h1>
            <div className='player-mark'>
                <span className={activeUser==='x'?'player-mark-active':""}  onClick={() => setActiveUser("x")}>
                    <Xicon color={activeUser === "x" ? "dark" : "light"} />
                </span>
                <span className={activeUser==='o'?'player-mark-active':""}  onClick={() => setActiveUser("o")}>
                    <Oicon color={activeUser === "o" ? "dark" : "light"}/>
                </span>
            </div>
            <p className='note-mark'>remember: x goes first</p>
        </div>
        <div className='start-btns'>
            <button className='btn btn-yellow'onClick={() => handleStart("cpu")}>new game (vs CPU)</button>
            <button className='btn btn-blue'onClick={() => handleStart("user")}>{""} new game (vs Player)</button>
        </div>
    </div>
}

export default Start;