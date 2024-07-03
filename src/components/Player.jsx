import { useState } from 'react';

export default function Player({pName, symbol, isActive}){
    
    const[ playerName, setPlayerName ] = useState(pName);
    const[ isEditing, setIsEditing ] = useState(false);

    function onClick(){
        setIsEditing((editing) => !editing);
        //setIsEditing(!isEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;
    let buttonName = "Edit";
    if(isEditing) {
        player = <input type="text" required value={playerName} onChange={handleChange}></input>
        buttonName = "Submit";
    }

    return(
        <li class={isActive ? 'active' : undefined}>
            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onClick}>{buttonName}</button>
        </li>
    );
}