import { useState } from 'react';

export default function Player({name, symbol}){

    const[ isEditing, setIsEditing ] = useState(false);

    function onClick(){
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;
    let buttonName = "Edit";
    if(isEditing) {
        playerName = <input type="text" required></input>
        buttonName = "Submit";
    }

    return(
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onClick}>{buttonName}</button>
        </li>
    );
}